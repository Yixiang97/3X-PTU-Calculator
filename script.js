// Scoring data
const situpScoring = [
    { reps: 80, score: 100 }, { reps: 79, score: 98 }, { reps: 78, score: 96 },
    { reps: 50, score: 50 }, { reps: 0, score: 0 }
];
const chinupScoring = { 20: 100, 10: 50, 0: 0 };
const runScoring = [
    { maxTime: 840, score: 100 }, { maxTime: 1000, score: 50 }, { maxTime: Infinity, score: 0 }
];
const ageCategories = {
    "Under 25": { minAge: 0, maxAge: 24, gradeA: 250 },
    "25-29": { minAge: 25, maxAge: 29, gradeA: 240 },
    "30-34": { minAge: 30, maxAge: 34, gradeA: 230 }
};

// Calculate Scores
function calculateScores() {
    const chinups = parseInt(document.getElementById("chinups").value) || 0;
    const situps = parseInt(document.getElementById("situps").value) || 0;
    const runtime = document.getElementById("runtime").value || "99:99";
    const age = parseInt(document.getElementById("age").value) || 0;

    const [runMinutes, runSeconds] = runtime.split(":").map(Number);
    const totalRunTime = runMinutes * 60 + (runSeconds || 0);

    const chinupScore = chinupScoring[chinups] || 0;
    const situpScore = situpScoring.find(s => situps >= s.reps)?.score || 0;
    const runScore = runScoring.find(r => totalRunTime <= r.maxTime)?.score || 0;

    const totalScore = chinupScore + situpScore + runScore;

    let gradeAThreshold = 250;
    for (const category of Object.values(ageCategories)) {
        if (age >= category.minAge && age <= category.maxAge) {
            gradeAThreshold = category.gradeA;
            break;
        }
    }

    const pointsToGradeA = Math.max(gradeAThreshold - totalScore, 0);
    const progressPercentage = Math.min((totalScore / gradeAThreshold) * 100, 100);

    displayPopup(chinupScore, situpScore, runScore, totalScore, pointsToGradeA, progressPercentage);
}

// Display Popup
function displayPopup(chinupScore, situpScore, runScore, totalScore, pointsToGradeA, progressPercentage) {
    const resultContent = document.getElementById("resultContent");
    const progressBar = document.getElementById("progress");

    resultContent.innerHTML = `
        <p><strong>Chin-up Score:</strong> ${chinupScore}</p>
        <p><strong>Sit-up Score:</strong> ${situpScore}</p>
        <p><strong>Run Score:</strong> ${runScore}</p>
        <p><strong>Total Score:</strong> ${totalScore}</p>
        <p>${pointsToGradeA === 0 ? "CONGRATULATIONS! You achieved Grade A!" : `${pointsToGradeA} points more to Grade A`}</p>
    `;

    progressBar.style.width = `${progressPercentage}%`;

    document.getElementById("resultPopup").classList.remove("hidden");
}

// Close Popup
function closePopup() {
    document.getElementById("resultPopup").classList.add("hidden");
}