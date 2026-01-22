const btn = document.getElementById("btn");
const result = document.getElementById("bmi-result");
const weightCondition = document.getElementById("weight-condition");

function calculate() {
  const height = document.getElementById("height").value / 100;
  const weight = document.getElementById("weight").value;

  const bmiValue = weight / (height * height);
  result.value = bmiValue;

  if (bmiValue < 18.5) {
    weightCondition.innerText = "Under Weight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightCondition.innerText = "Normal Weight";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightCondition.innerText = "Overweight";
  } else if (bmiValue <= 30) {
    weightCondition.innerText = "Obesity";
  }
}

btn.addEventListener("click", calculate);
