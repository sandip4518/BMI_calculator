function checkBMI() {
  const suggesion = document.getElementById("suggetions");
  let height = parseInt(document.getElementById("Height").value);
  let weight = parseInt(document.getElementById("Weight").value);
  if (!height || !weight) {
    suggesion.textContent = "Enter Vaild Height and Weight.";
    return;
  }
  let result = parseInt(weight / ((height / 100) * (height / 100)));
  document.getElementById("result").value = result;
  progress(result);
  if (result <= 18) {
    suggesion.textContent = "You are Underwieght.";
  } else if (result > 18 && result < 25) {
    suggesion.textContent = "You are Healthy.";
  } else {
    suggesion.textContent = "You are Overwieght. You Need Exerxise!";
  }
}
function progress(result) {
  const progressDiv = document.getElementById("Progress");

  if (result > 40) result = 40;
  if (result < 0 || isNaN(result)) result = 0;

  let per_result = parseInt((result / 40) * 100);
  progressDiv.style.width = per_result + "%";
  progressDiv.innerText = per_result + "%";

  // Optional: Change color based on BMI
  if (result <= 18) {
    progressDiv.style.backgroundColor = "#03A9F4"; // Blue
  } else if (result > 18 && result < 25) {
    progressDiv.style.backgroundColor = "#4CAF50"; // Green
  } else {
    progressDiv.style.backgroundColor = "#F44336"; // Red
  }
}
