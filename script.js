const button = document.querySelector("#button");
const input = document.querySelector("#input");
const icon = document.querySelector(".fa-solid");

button.addEventListener("click", generatePassword);

function generatePassword() {
  var length = 8,
    characters =
      "!@#$%&*abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    password = "";
  charLength = characters.length;
  for (var i = 0; i < length; ++i) {
    password += characters.charAt(Math.floor(Math.random() * charLength));
  }

  input.value = password;
  icon.style.display = "block";
}

icon.addEventListener("click", copyPassword);

function copyPassword() {
  input.select();
  navigator.clipboard.writeText(input.value);
}
