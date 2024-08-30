// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!

function averageScore(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

const dolphinsAverage = averageScore(44, 23, 71);
const koalasAverage = averageScore(65, 54, 49);

const dolphinsAverage2 = averageScore(85, 54, 41);
const koalasAverage2 = averageScore(23, 34, 27);

function checkWinner(dolphinsAverage, koalasAverage) {
    if (dolphinsAverage >= 2 * koalasAverage) {
        console.log(`Dolphins win (${dolphinsAverage} vs ${koalasAverage})`);
    } else if (koalasAverage >= 2 * dolphinsAverage) {
        console.log(`Koalas win (${koalasAverage} vs ${dolphinsAverage})`);
    } else {
        console.log('No team wins');
    }
}

checkWinner(dolphinsAverage, koalasAverage);
checkWinner(dolphinsAverage2, koalasAverage2);
