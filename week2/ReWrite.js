// // Tìm hiểu thêm về Find trong Javascript
const ages = [3, 10, 18, 20];

// function checkAge(age) {
//   return age > 18;
// }


// console.log(ages.find(checkAge));

// // Tìm hiểu về map trong js
// const persons = [
//   {firstname : "Malcom", lastname: "Reynolds"},
//   {firstname : "Kaylee", lastname: "Frye"},
//   {firstname : "Jayne", lastname: "Cobb"}
// ];

// persons.map(getFullName);

// function getFullName(item) {
//   return [item.firstname,item.lastname].join(" ");
// }

// console.log(getFullName(persons[0]));

// Tìm hiểu về filter trong js
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

console.log(result);

