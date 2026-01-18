const btn = document.getElementById("generate");
const input = document.getElementById("input");
const copy = document.querySelector(".fa-copy");
const alertBox = document.querySelector(".alert-container");

btn.addEventListener("click", () => {
  createPassword();
});

copy.addEventListener("click", () => {
  copyPassword();
  if (input.value) {
    alertBox.classList.remove("active");
    setTimeout(() => {
      alertBox.classList.add("active");
    }, 2000);
  }
});

function createPassword() {
  const char =
    "0123456789abcdefghijklmnopqurstuvwxyz!@#$%^&*()_+{}|~?><:ABCDEFGHIJKLMNOPQURSTUVWXYZ";
  const passwordLength = 10;
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomNum = Math.floor(Math.random() * char.length);
    password += char[randomNum];
  }
  input.value = password;
  alertBox.innerText = password + " copied!";
}

function copyPassword() {
  input.select();
  input.setSelectionRange(0, 9999);

  navigator.clipboard.writeText(input.value);
}
