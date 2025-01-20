// Chin-up scoring data
const chinupScoring = {
    20: 100, 19: 95, 18: 90, 17: 85, 16: 80, 15: 75, 14: 70, 13: 65, 12: 60,
    11: 55, 10: 50, 9: 45, 8: 40, 7: 35, 6: 30, 5: 25, 4: 20, 3: 15, 2: 10,
    1: 5, 0: 0
};

// Sit-up scoring data
const situpScoring = [
    { reps: 80, score: 100 }, { reps: 79, score: 99 }, { reps: 78, score: 98 },
    { reps: 77, score: 97 }, { reps: 76, score: 96 }, { reps: 75, score: 95 },
    { reps: 74, score: 94 }, { reps: 73, score: 93 }, { reps: 72, score: 92 },
    { reps: 71, score: 91 }, { reps: 70, score: 90 }, { reps: 69, score: 89 },
    { reps: 68, score: 88 }, { reps: 67, score: 87 }, { reps: 66, score: 86 },
    { reps: 65, score: 85 }, { reps: 64, score: 84 }, { reps: 63, score: 83 },
    { reps: 62, score: 82 }, { reps: 61, score: 81 }, { reps: 60, score: 80 },
    { reps: 59, score: 79 }, { reps: 58, score: 78 }, { reps: 57, score: 77 },
    { reps: 56, score: 76 }, { reps: 55, score: 75 }, { reps: 54, score: 74 },
    { reps: 53, score: 73 }, { reps: 52, score: 72 }, { reps: 51, score: 71 },
    { reps: 50, score: 70 }, { reps: 49, score: 69 }, { reps: 48, score: 68 },
    { reps: 47, score: 67 }, { reps: 46, score: 66 }, { reps: 45, score: 65 },
    { reps: 44, score: 64 }, { reps: 43, score: 63 }, { reps: 42, score: 62 },
    { reps: 41, score: 61 }, { reps: 40, score: 60 }, { reps: 39, score: 59 },
    { reps: 38, score: 58 }, { reps: 37, score: 57 }, { reps: 36, score: 56 },
    { reps: 35, score: 55 }, { reps: 34, score: 54 }, { reps: 33, score: 53 },
    { reps: 32, score: 52 }, { reps: 31, score: 51 }, { reps: 30, score: 50 },
    { reps: 29, score: 49 }, { reps: 28, score: 48 }, { reps: 27, score: 47 },
    { reps: 26, score: 46 }, { reps: 25, score: 45 }, { reps: 24, score: 44 },
    { reps: 23, score: 43 }, { reps: 22, score: 42 }, { reps: 21, score: 41 },
    { reps: 20, score: 40 }, { reps: 19, score: 39 }, { reps: 18, score: 38 },
    { reps: 17, score: 37 }, { reps: 16, score: 36 }, { reps: 15, score: 35 },
    { reps: 14, score: 34 }, { reps: 13, score: 33 }, { reps: 12, score: 32 },
    { reps: 11, score: 31 }, { reps: 10, score: 30 }, { reps: 9, score: 29 },
    { reps: 8, score: 28 }, { reps: 7, score: 27 }, { reps: 6, score: 26 },
    { reps: 5, score: 25 }, { reps: 4, score: 24 }, { reps: 3, score: 23 },
    { reps: 2, score: 22 }, { reps: 1, score: 21 }, { reps: 0, score: 0 }
];

// Run scoring data
const runScoring = [
    { maxTime: 14 * 60 + 0, score: 100 },
    { maxTime: 14 * 60 + 6, score: 99 },
    { maxTime: 14 * 60 + 12, score: 98 },
    { maxTime: 14 * 60 + 18, score: 97 },
    { maxTime: 14 * 60 + 24, score: 96 },
    { maxTime: 14 * 60 + 30, score: 95 },
    { maxTime: 14 * 60 + 36, score: 94 },
    { maxTime: 14 * 60 + 42, score: 93 },
    { maxTime: 14 * 60 + 48, score: 92 },
    { maxTime: 14 * 60 + 54, score: 91 },
    { maxTime: 15 * 60 + 0, score: 90 },
    { maxTime: 15 * 60 + 6, score: 89 },
    { maxTime: 15 * 60 + 12, score: 88 },
    { maxTime: 15 * 60 + 18, score: 87 },
    { maxTime: 15 * 60 + 24, score: 86 },
    { maxTime: 15 * 60 + 30, score: 85 },
    { maxTime: 15 * 60 + 36, score: 84 },
    { maxTime: 15 * 60 + 42, score: 83 },
    { maxTime: 15 * 60 + 48, score: 82 },
    { maxTime: 15 * 60 + 54, score: 81 },
    { maxTime: 16 * 60 + 0, score: 80 },
    { maxTime: 16 * 60 + 6, score: 79 },
    { maxTime: 16 * 60 + 12, score: 78 },
    { maxTime: 16 * 60 + 18, score: 77 },
    { maxTime: 16 * 60 + 24, score: 76 },
    { maxTime: 16 * 60 + 30, score: 75 },
    { maxTime: 16 * 60 + 36, score: 74 },
    { maxTime: 16 * 60 + 42, score: 73 },
    { maxTime: 16 * 60 + 48, score: 72 },
    { maxTime: 16 * 60 + 54, score: 71 },
    { maxTime: 17 * 60 + 0, score: 70 },
    { maxTime: 17 * 60 + 6, score: 69 },
    { maxTime: 17 * 60 + 12, score: 68 },
    { maxTime: 17 * 60 + 18, score: 67 },
    { maxTime: 17 * 60 + 24, score: 66 },
    { maxTime: 17 * 60 + 30, score: 65 },
    { maxTime: 17 * 60 + 36, score: 64 },
    { maxTime: 17 * 60 + 42, score: 63 },
    { maxTime: 17 * 60 + 48, score: 62 },
    { maxTime: 17 * 60 + 54, score: 61 },
    { maxTime: 18 * 60 + 0, score: 60 },
    { maxTime: 18 * 60 + 6, score: 59 },
    { maxTime: 18 * 60 + 12, score: 58 },
    { maxTime: 18 * 60 + 18, score: 57 },
    { maxTime: 18 * 60 + 24, score: 56 },
    { maxTime: 18 * 60 + 30, score: 55 },
    { maxTime: 18 * 60 + 36, score: 54 },
    { maxTime: 18 * 60 + 42, score: 53 },
    { maxTime: 18 * 60 + 48, score: 52 },
    { maxTime: 18 * 60 + 54, score: 51 },
    { maxTime: 19 * 60 + 0, score: 50 },
    { maxTime: 19 * 60 + 6, score: 49 },
    { maxTime: 19 * 60 + 12, score: 48 },
    { maxTime: 19 * 60 + 18, score: 47 },
    { maxTime: 19 * 60 + 24, score: 46 },
    { maxTime: 19 * 60 + 30, score: 45 },
    { maxTime: 19 * 60 + 36, score: 44 },
    { maxTime: 19 * 60 + 42, score: 43 },
    { maxTime: 19 * 60 + 48, score: 42 },
    { maxTime: 19 * 60 + 54, score: 41 },
    { maxTime: 20 * 60 + 0, score: 40 },
    { maxTime: 20 * 60 + 6, score: 39 },
    { maxTime: 20 * 60 + 12, score: 38 },
    { maxTime: 20 * 60 + 18, score: 37 },
    { maxTime: 20 * 60 + 24, score: 36 },
    { maxTime: 20 * 60 + 30, score: 35 },
    { maxTime: 20 * 60 + 36, score: 34 },
    { maxTime: 20 * 60 + 42, score: 33 },
    { maxTime: 20 * 60 + 48, score: 32 },
    { maxTime: 20 * 60 + 54, score: 31 },
    { maxTime: 21 * 60 + 0, score: 30 },
    { maxTime: 21 * 60 + 6, score: 29 },
    { maxTime: 21 * 60 + 12, score: 28 },
    { maxTime: 21 * 60 + 18, score: 27 },
    { maxTime: 21 * 60 + 24, score: 26 },
    { maxTime: 21 * 60 + 30, score: 25 },
    { maxTime: 21 * 60 + 36, score: 24 },
    { maxTime: 21 * 60 + 42, score: 23 },
    { maxTime: 21 * 60 + 48, score: 22 },
    { maxTime: 21 * 60 + 54, score: 21 },
    { maxTime: 22 * 60 + 0, score: 20 },
    { maxTime: 22 * 60 + 6, score: 19 },
    { maxTime: 22 * 60 + 12, score: 18 },
    { maxTime: 22 * 60 + 18, score: 17 },
    { maxTime: 22 * 60 + 24, score: 16 },
    { maxTime: 22 * 60 + 30, score: 15 },
    { maxTime: 22 * 60 + 36, score: 14 },
    { maxTime: 22 * 60 + 42, score: 13 },
    { maxTime: 22 * 60 + 48, score: 12 },
    { maxTime: 22 * 60 + 54, score: 11 },
    { maxTime: 23 * 60 + 0, score: 10 },
    { maxTime: 23 * 60 + 6, score: 9 },
    { maxTime: 23 * 60 + 12, score: 8 },
    { maxTime: 23 * 60 + 18, score: 7 },
    { maxTime: 23 * 60 + 24, score: 6 },
    { maxTime: 23 * 60 + 30, score: 5 },
    { maxTime: 23 * 60 + 36, score: 4 },
    { maxTime: 23 * 60 + 42, score: 3 },
    { maxTime: 23 * 60 + 48, score: 2 },
    { maxTime: 23 * 60 + 54, score: 1 },
];


// Age categories with grade thresholds
const ageCategories = {
    "Category X": { minAge: 0, maxAge: 24, gradeA: 250 },
    "Category Y": { minAge: 25, maxAge: 29, gradeA: 240 },
    "Category Z": { minAge: 30, maxAge: 34, gradeA: 230 },
    "Category W": { minAge: 35, maxAge: 39, gradeA: 220 },
    "Category V": { minAge: 40, maxAge: 44, gradeA: 210 },
    "Category U": { minAge: 45, maxAge: 49, gradeA: 200 },
    "Category T": { minAge: 50, maxAge: 100, gradeA: 190 }
};

// Calculate Scores
function calculateScores() {
    const chinups = parseInt(document.getElementById("chinups").value) || 0;
    const situps = parseInt(document.getElementById("situps").value) || 0;
    const runtime = document.getElementById("runtime").value || "99:99";
    const age = parseInt(document.getElementById("age").value) || 0;

    // Chin-up score
    const chinupScore = chinupScoring[chinups] || 0;

    // Sit-up score
    let situpScore = 0;
    for (const entry of situpScoring) {
        if (situps >= entry.reps) {
            situpScore = entry.score;
            break;
        }
    }

    // Run score
    let runScore = 0;
    const [runMinutes, runSeconds] = runtime.split(":").map(Number);
    const totalRunTime = (isNaN(runMinutes) || isNaN(runSeconds)) ? 9999 : runMinutes * 60 + runSeconds;
    for (const entry of runScoring) {
        if (totalRunTime <= entry.maxTime) {
            runScore = entry.score;
            break;
        }
    }

    const totalScore = chinupScore + situpScore + runScore;

    // Determine Grade A threshold based on age
    let gradeAThreshold = 250;
    for (const category in ageCategories) {
        const { minAge, maxAge, gradeA } = ageCategories[category];
        if (age >= minAge && age <= maxAge) {
            gradeAThreshold = gradeA;
            break;
        }
    }

    const pointsToGradeA = Math.max(gradeAThreshold - totalScore, 0);

    // Suggested run time calculation
    let suggestedRunTime = "N/A";
    if (pointsToGradeA > 0 && pointsToGradeA <= 100) {
        for (const entry of runScoring) {
            if (entry.score === pointsToGradeA) {
                const minutes = Math.floor(entry.maxTime / 60);
                const seconds = entry.maxTime % 60;
                suggestedRunTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;
                break;
            }
        }
    }

    // Display results in the popup
    const resultPopup = document.getElementById("resultPopup");
    document.getElementById("resultDetails").innerHTML = `
        <h2>Results</h2>
        <p>Chin-up Score: ${chinupScore}</p>
        <p>Sit-up Score: ${situpScore}</p>
        <p>Run Score: ${runScore}</p>
        <p>Total Score: ${totalScore}</p>
        <p>${pointsToGradeA > 0 ? `${pointsToGradeA} points more to Grade A` : "CONGRATULATIONS! You achieved Grade A!"}</p>
        <p>Suggested Run Time to Achieve Grade A: ${suggestedRunTime}</p>
    `;
    resultPopup.style.display = "flex";
}

// Function to close the popup
function closePopup() {
    document.getElementById("resultPopup").style.display = "none";
}