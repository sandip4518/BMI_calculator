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

  if (result <= 18) {
    suggesion.textContent = "You are Underwieght.";
  } else if (result > 18 && result < 25) {
    suggesion.textContent = "You are Healthy.";
  } else {
    suggesion.textContent = "You are Overwieght. You Need Exerxise!";
  }
}
