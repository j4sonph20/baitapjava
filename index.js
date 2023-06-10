// bài tập 1

function calculateSalary() {
  let workDate = document.getElementById("workDate").value;
  let salaryPerDay = 100000;
  let totalSalary = salaryPerDay * workDate;
  document.getElementById("totalSalary").innerHTML =
    "Total Salary: " + totalSalary;
}
//bài tập 2
function calculateAverage() {
  let so1 = parseFloat(document.getElementById("so1").value);
  let so2 = parseFloat(document.getElementById("so2").value);
  let so3 = parseFloat(document.getElementById("so3").value);
  let so4 = parseFloat(document.getElementById("so4").value);
  let so5 = parseFloat(document.getElementById("so5").value);

  if (isNaN(so1) || isNaN(so2) || isNaN(so3) || isNaN(so4) || isNaN(so5)) {
    alert("Please enter valid numbers for all fields.");
    return;
  }

  let sum = so1 + so2 + so3 + so4 + so5;
  let average = sum / 5;

  if (
    so1 % 5 === 0 &&
    so2 % 5 === 0 &&
    so3 % 5 === 0 &&
    so4 % 5 === 0 &&
    so5 % 5 === 0
  ) {
    alert("The average of the numbers is: " + average);
  } else {
    alert("All numbers should be divisible by 5.");
  }
}
//bài tập 3
function quyDoi() {
  let usdAmount = document.getElementById("usdAmount").value;
  let exchangeRate = 23500;
  let vndAmount = usdAmount * exchangeRate;
  document.getElementById("tienViet").innerHTML =
    "VND Amount: " + vndAmount.toLocaleString();
}

//bài tap 4
function tinhtoan() {
  let length = parseFloat(document.getElementById("length").value);
  let width = parseFloat(document.getElementById("width").value);

  if (isNaN(length) || isNaN(width)) {
    document.getElementById("result").innerHTML =
      "Please enter valid numbers for length and width.";
    return;
  }

  let dientich = length * width;
  let chuvi = 2 * (length + width);

  document.getElementById("result").innerHTML =
    "dientich: " + dientich + "<br>chuvi: " + chuvi;
}

//bài tập 5
function dapan() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  let ketqua = unconventionalAddition(num1, num2);

  document.getElementById("dapan").innerHTML = " Ketqua: " + ketqua;
}

function unconventionalAddition(num1, num2) {
  let dapan = num1.toString() + num2.toString();

  return dapan;
}
