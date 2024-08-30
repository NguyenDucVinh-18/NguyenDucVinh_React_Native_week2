// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)


obj = [
    { fullname: "Mark Miller", mass: 78, height: 1.69 },
    { fullname: "John Smith", mass: 92, height: 1.95 }
]

function calcBMI(obj) {
    return obj.mass / obj.height ** 2;
}

if (calcBMI(obj[0]) > calcBMI(obj[1])) {
    console.log(`${obj[0].fullname}'s BMI (${calcBMI(obj[0])}) is higher than ${obj[1].fullname}'s BMI (${calcBMI(obj[1])})`);
} else {
    console.log(`${obj[1].fullname}'s BMI (${calcBMI(obj[1])}) is higher than ${obj[0].fullname}'s BMI (${calcBMI(obj[0])})`);
}


