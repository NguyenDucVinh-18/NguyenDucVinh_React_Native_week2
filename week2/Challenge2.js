// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.



function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

var bills = [125, 555, 44];
var tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

var total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log("bill:" + bills[0] + " tip:" + tips[0] + " total:" + total[0]);
console.log("bill:" + bills[1] + " tip:" + tips[1] + " total:" + total[1]);
console.log("bill:" + bills[2] + " tip:" + tips[2] + " total:" + total[2]);