// Tìm hiểu thêm về Find trong Javascript
const ages = [3, 10, 18, 20];

function checkAge(age) {
  return age > 18;
}


console.log(ages.find(checkAge));
