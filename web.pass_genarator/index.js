const dataLowercase = "abcdefghijklmnopqrstuvwxyz";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumber = "0123456789";
const dataSymbols = "$&*ù!:;,)=àç\"'(-è_)";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
function generatePassword() {
  let data = [];
  let password = [];
  var buffer = 0;
  if (lowercase.checked) {data.push(...dataLowercase) && buffer++ };
  if (uppercase.checked) {data.push(...dataUppercase) && buffer++};
  if (number.checked) {data.push(...dataNumber) && buffer++};
  if (symbols.checked) {data.push(...dataSymbols) && buffer++};

  if (lowercase.checked) password.push (...dataLowercase[Math.floor(Math.random() * dataLowercase.length)]);
  if (uppercase.checked) password.push(...dataUppercase[Math.floor(Math.random() * dataUppercase.length)]);
  if (number.checked) password.push(...dataNumber[Math.floor(Math.random() * dataNumber.length)]);
  if (symbols.checked) password.push(...dataSymbols[Math.floor(Math.random() * dataSymbols.length)]);
 
  var r = rangeValue.value;
  r = r - buffer;
  console.log(password);

  if (data.length === 0) {
    alert("Please select criteria");
    return;
  }

  for (i = 0; i < r ; i++) {
    password.push(...data[Math.floor(Math.random() * data.length)]);
    console.log(password);
  }
  shuffle(password);
  console.log(password);
  passwordOutput.value = password.join("");

  passwordOutput.select();
  document.execCommand("copy");

  generateButton.textContent = "Copied !";

  setTimeout(() => {
    generateButton.textContent = "Generate password";
  }, 3000);
}
generateButton.addEventListener("click", generatePassword);

const loader = document.querySelector(".loader");

function load() {
  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.className += " hidden";
    }, 2500);
  });
}
load();
