// Let's improve Steven's tip calculator even more, this time using loops!

var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
var tips = []
var totals = []
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]))
    totals.push(bills[i] + tips[i])
    console.log(`bill:${bills[i]} tip:${tips[i]} total:${totals[i]}`)
}

function calcAverage(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length
}

console.log(calcAverage(totals))