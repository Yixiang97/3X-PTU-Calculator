// Scoring data
const scoringData = {
    chinups: { 20: 100, 19: 95, 18: 90, 17: 85, 16: 80, 15: 75, 14: 70, 13: 65, 12: 60, 11: 55, 10: 50, 9: 45, 8: 40, 7: 35, 6: 30, 5: 25, 4: 20, 3: 15, 2: 10, 1: 5, 0: 0 },
    situps: { 80: 100, 79: 98, 78: 96, 77: 94, 76: 92, 75: 90, 74: 88, 73: 86, 72: 84, 71: 82, 70: 80, 69: 78, 68: 76, 67: 74, 66: 72, 65: 70, 64: 68, 63: 66, 62: 64, 61: 62, 60: 60 },
    run: { 50400: 100, 50760: 99, 51120: 98, 51480: 97, 51840: 96, 52200: 95, 52560: 94, 52920: 93, 53280: 92, 53640: 91, 54000: 90 },
    ageCategories: {
        "Category X": { minAge: 0, maxAge: 24, gradeA: 250, gradeB: 230, gradeC: 210 },
        "Category Y": { minAge: 25, maxAge: 29, gradeA: 240, gradeB: 220, gradeC: 200 },
        "Category Y1": { minAge: 30, maxAge: 34, gradeA: 230, gradeB: 210, gradeC: 190 },
        "Category Z": { minAge: 35, maxAge: 39, gradeA: 220, gradeB: 200, gradeC: 180 },
        "Category Z1": { minAge: 40, maxAge: 44, gradeA: 210, gradeB: 190, gradeC: 170 },
        "Category V": { minAge: 45, maxAge: 49, gradeA: 200, gradeB: 180, gradeC: 160 },
        "Category V1": { minAge: 50, maxAge: 100, gradeA: 170, gradeB: 150, gradeC: 140 }
    }
};

function calculateScores() {
    const chinups = parseInt(document.getElementById("chinups").value);
    const situps = parseInt(document.getElementById("situps").value);
    const runtime = document.getElementById("runtime").value;
    const age = parseInt(document.getElementById("age").value);

    // Convert run time to total seconds
    const [runMinutes, runSeconds] = runtime.split(":").map(Number);
    const totalRunTime = runMinutes * 60 + runSeconds;

    // Look up scores
    const chinupScore = scoringData.chinups[chinups] || 0;
    const situpScore = scoringData.situps[situps] || 0;
    const runScore = Object.keys(scoringData.run).reduce((score, time) => {
        return totalRunTime <= time ? scoringData.run[time] : score;
    }, 0);

    const totalScore = chinupScore + situpScore + runScore;

    // Determine age category and grade
    let grade = "Fail";
    for (const category in scoringData.ageCategories) {
        const { minAge, maxAge, gradeA, gradeB, gradeC } = scoringData.ageCategories[category];
        if (age >= minAge && age <= maxAge) {
            if (totalScore >= gradeA) grade = "Grade A";
            else if (totalScore >= gradeB) grade = "Grade B";
            else if (totalScore >= gradeC) grade = "Grade C";
            break;
        }
    }

    // Display result
    document.getElementById("result").innerHTML = `
        <h2>Results</h2>
        <p><strong>Chin-up Score:</strong> ${chinupScore}</p>
        <p><strong>Sit-up Score:</strong> ${situpScore}</p>
        <p><strong>Run Score:</strong> ${runScore}</p>
        <p><strong>Total Score:</strong> ${totalScore}</p>
        <p><strong>Performance Grade:</strong> ${grade}</p>
    `;
}