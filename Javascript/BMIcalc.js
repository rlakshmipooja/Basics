function bmiCalculator(weight, height) {
  //   return weight / (height * height);
  return Math.round(weight / Math.pow(height, 2));
}

// console.log(bmiCalculator(55, 1.59));
let bmi = bmiCalculator(55, 1.59);

if (bmi < 18.5) {
  console.log("Under weight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("Normal weight");
} else if (bmi > 24.9) {
  console.log("Over weight");
} else {
  console.log("Invalid");
}
