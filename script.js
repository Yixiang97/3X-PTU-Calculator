// Sit-up scoring data
const situpScoring = [
    { reps: 80, score: 100 }, { reps: 79, score: 98 }, { reps: 78, score: 96 },
    { reps: 77, score: 94 }, { reps: 76, score: 92 }, { reps: 75, score: 90 },
    { reps: 74, score: 88 }, { reps: 73, score: 86 }, { reps: 72, score: 84 },
    { reps: 71, score: 82 }, { reps: 70, score: 80 }, { reps: 69, score: 78 },
    { reps: 68, score: 76 }, { reps: 67, score: 74 }, { reps: 66, score: 72 },
    { reps: 65, score: 70 }, { reps: 64, score: 68 }, { reps: 63, score: 66 },
    { reps: 62, score: 64 }, { reps: 61, score: 62 }, { reps: 60, score: 60 },
    { reps: 59, score: 59 }, { reps: 58, score: 58 }, { reps: 57, score: 57 },
    { reps: 56, score: 56 }, { reps: 55, score: 55 }, { reps: 54, score: 54 },
    { reps: 53, score: 53 }, { reps: 52, score: 52 }, { reps: 51, score: 51 },
    { reps: 50, score: 50 }, { reps: 49, score: 49 }, { reps: 48, score: 48 },
    { reps: 47, score: 47 }, { reps: 46, score: 46 }, { reps: 45, score: 45 },
    { reps: 44, score: 44 }, { reps: 43, score: 43 }, { reps: 42, score: 42 },
    { reps: 41, score: 41 }, { reps: 40, score: 40 }, { reps: 39, score: 39 },
    { reps: 38, score: 38 }, { reps: 37, score: 37 }, { reps: 36, score: 36 },
    { reps: 35, score: 35 }, { reps: 34, score: 34 }, { reps: 33, score: 33 },
    { reps: 32, score: 32 }, { reps: 31, score: 31 }, { reps: 30, score: 30 },
    { reps: 29, score: 29 }, { reps: 28, score: 28 }, { reps: 27, score: 27 },
    { reps: 26, score: 26 }, { reps: 25, score: 25 }, { reps: 24, score: 24 },
    { reps: 23, score: 23 }, { reps: 22, score: 22 }, { reps: 21, score: 21 },
    { reps: 20, score: 20 }, { reps: 19, score: 19 }, { reps: 18, score: 18 },
    { reps: 17, score: 17 }, { reps: 16, score: 16 }, { reps: 15, score: 15 },
    { reps: 14, score: 14 }, { reps: 13, score: 13 }, { reps: 12, score: 12 },
    { reps: 11, score: 11 }, { reps: 10, score: 10 }, { reps: 9, score: 9 },
    { reps: 8, score: 8 }, { reps: 7, score: 7 }, { reps: 6, score: 6 },
    { reps: 5, score: 5 }, { reps: 4, score: 4 }, { reps: 3, score: 3 },
    { reps: 2, score: 2 }, { reps: 1, score: 1 }, { reps: 0, score: 0 }
];

// Chin-up scoring data
const chinupScoring = { 20: 100, 19: 95, 18: 90, 17: 85, 16: 80, 15: 75, 14: 70, 13: 65, 12: 60, 11: 55, 10: 50, 9: 45, 8: 40, 7: 35, 6: 30, 5: 25, 4: 20, 3: 15, 2: 10, 1: 5, 0: 0 };

// Run scoring data
const runScoring = [
    { maxTime: 840, score: 100 }, { maxTime: 846, score: 99 }, { maxTime: 852, score: 98 },
    { maxTime: 858, score: 97 }, { maxTime: 864, score: 96 }, { maxTime: 870, score: 95 },
    { maxTime: 876, score: 94 }, { maxTime: 882, score: 93 }, { maxTime: 888, score: 92 },
    { maxTime: 894, score: 91 }, { maxTime: 900, score: 90 }, { maxTime: 906, score: 89 },
    { maxTime: 912, score: 88 }, { maxTime: 918, score: 87 }, { maxTime: 924, score: 86 },
    { maxTime: 930, score: 85 }, { maxTime: 936, score: 84 }, { maxTime: 942, score: 83 },
    { maxTime: 948, score: 82 }, { maxTime: 954, score: 81 }, { maxTime: 960, score: 80 },
    { maxTime: 966, score: 79 }, { maxTime: 972, score: 78 }, { maxTime: 978, score: 77 },
    { maxTime: 984, score: 76 }, { maxTime: 990, score: 75 }, { maxTime: 996, score: 74 },
    { maxTime: 1002, score: 73 }, { maxTime: 1008, score: 72 }, { maxTime: 1014, score: 71 },
    { maxTime: 1020, score: 70 }, { maxTime: 1026, score: 69 }, { maxTime: 1032, score: 68 },
    { maxTime: 1038, score: 67 }, { maxTime: 1044, score: 66 }, { maxTime: 1050, score: 65 },
    { maxTime: 1056, score: 64 }, { maxTime: 1062, score: 63 }, { maxTime: 1068, score: 62 },
    { maxTime: 1074, score: 61 }, { maxTime: 1080, score: 60 }, { maxTime: 1086, score: 59 },
    { maxTime: 1092, score: 58 }, { maxTime: 1098, score: 57 }, { maxTime: 1104, score: 56 },
    { maxTime: 1110, score: 55 }, { maxTime: 1116, score: 54 }, { maxTime: 1122, score: 53 },
    { maxTime: 1128, score: 52 }, { maxTime: 1134, score: 51 }, { maxTime: 1140, score: 50 },
    { maxTime: 1146, score: 49 }, { maxTime: 1152, score: 48 }, { maxTime: 1158, score: 47 },
    { maxTime: 1164, score: 46 }, { maxTime: 1170, score: 45 }, { maxTime: 1176, score: 44 },
    { maxTime: 1182, score: 43 }, { maxTime: 1188, score: 42 }, { maxTime: 1194, score: 41 },
    { maxTime: 1200, score: 40 }, { maxTime: 1206, score: 39 }, { maxTime: 1212, score: 38 },
    { maxTime: 1218, score: 37 }, { maxTime: 1224, score: 36 }, { maxTime: 1230, score: 35 },
    { maxTime: 1236, score: 34 }, { maxTime: 1242, score: 33 }, { maxTime: 1248, score: 32 },
    { maxTime: 1254, score: 31 }, { maxTime: 1260, score: 30 }, { maxTime: 1266, score: 29 },
    { maxTime: 1272, score: 28 }, { maxTime: 1278, score: 27 }, { maxTime: 1284, score: 26 },
    { maxTime: 1290, score: 25 }, { maxTime: 1296, score: 24 }, { maxTime: 1302, score: 23 },
    { maxTime: 1308, score: 22 }, { maxTime: 1314, score: 21 }, { maxTime: 1320, score: 20 },
    { maxTime: 1326, score: 19 }, { maxTime: 1332, score: 18 }, { maxTime: 1338, score: 17 },
    { maxTime: 1344, score: 16 }, { maxTime: 1350, score: 15 }, { maxTime: 1356, score: 14 },
    { maxTime: 1362, score: 13 }, { maxTime: 1368, score: 12 }, { maxTime: 1374, score: 11 },
    { maxTime: 1380, score: 10 }, { maxTime: 1386, score: 9 }, { maxTime: 1392, score: 8 },
    { maxTime: 1398, score: 7 }, { maxTime: 1404, score: 6 }, { maxTime: 1410, score: 5 },
    { maxTime: 1416, score: 4 }, { maxTime: 1422, score: 3 }, { maxTime: 1428, score: 2 },
    { maxTime: 1434, score: 1 }
];

// Age categories
const ageCategories = {
    "Category X": { minAge: 0, maxAge: 24, gradeRanges: { A: 250, B: [230, 249], C: [210, 229] } },
    "Category Y": { minAge: 25, maxAge: 29, gradeRanges: { A: 240, B: [220, 239], C: [200, 219] } },
    "Category Y1": { minAge: 30, maxAge: 34, gradeRanges: { A: 230, B: [210, 229], C: [190, 209] } },
    "Category Z": { minAge: 35, maxAge: 39, gradeRanges: { A: 220, B: [200, 219], C: [180, 199] } },
    "Category Z1": { minAge: 40, maxAge: 44, gradeRanges: { A: 210, B: [190, 209], C: [170, 189] } },
    "Category V": { minAge: 45, maxAge: 49, gradeRanges: { A: 200, B: [180, 199], C: [160, 179] } },
    "Category V1": { minAge: 50, maxAge: 100, gradeRanges: { A: 170, B: [150, 169], C: [140, 149] } }
};

// Function to calculate scores
function calculateScores() {
    const chinups = parseInt(document.getElementById("chinups").value);
    const situps = parseInt(document.getElementById("situps").value);
    const runtime = document.getElementById("runtime").value;
    const age = parseInt(document.getElementById("age").value);

    // Convert runtime to total seconds
    const [runMinutes, runSeconds] = runtime.split(":").map(Number);
    const totalRunTime = runMinutes * 60 + runSeconds;

    // Chin-up score
    const chinupScore = chinups >= 20 ? 100 : (chinupScoring[chinups] || 0);

    // Sit-up score
    let situpScore = 0;
    for (const entry of situpScoring) {
        if (situps >= entry.reps) {
            situpScore = entry.score;
            break;
        }
    }

    // Run score
    let runScore = 1; // Default to lowest score
    for (const entry of runScoring) {
        if (totalRunTime <= entry.maxTime) {
            runScore = entry.score;
            break;
        }
    }

    const totalScore = chinupScore + situpScore + runScore;

    // Determine grade
    let grade = "Fail";
    for (const category in ageCategories) {
        const { minAge, maxAge, gradeRanges } = ageCategories[category];
        if (age >= minAge && age <= maxAge) {
            if (totalScore >= gradeRanges.A) grade = "Grade A";
            else if (totalScore >= gradeRanges.B[0] && totalScore <= gradeRanges.B[1]) grade = "Grade B";
            else if (totalScore >= gradeRanges.C[0] && totalScore <= gradeRanges.C[1]) grade = "Grade C";
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