function generateColor() {
  var pattern = "abcdef0123456789";
  let color_hex = "#"
  for (let i = 0; i < 6; i++) {
    color_hex += pattern[Math.floor(Math.random() * pattern.length)];
  }

  return color_hex;

}
colorPalette();
document.querySelector("button").addEventListener("click", colorPalette);
document.querySelector("html").addEventListener("keydown", (e) => {

  if (e.keyCode == 32) {
    let color = document.querySelectorAll(".color");
    let color_text = document.querySelectorAll(".color-hex");
    for (let i = 0; i < color.length; i++) {
      color[i].style.backgroundColor = generateColor();
      color_text[i].textContent = generateColor();
    }
  }
  e.preventDefault();
});
document.querySelector("html").addEventListener("keydown", (e) => {
  if (e.keyCode === 67) {
    const hiddenInput = document.createElement("input");
    const alert = document.querySelector(".copy-alert");

    hiddenInput.className = "copyInput";
    hiddenInput.value = color_palets[2].children[1].textContent;
    document.querySelector(".copy-alert").children[0].textContent = hiddenInput.value;
    color_palets[2].appendChild(hiddenInput);
    copyAlert(hiddenInput, alert);
  }
})

function colorPalette() {
  let color = document.querySelectorAll(".color");
  let color_text = document.querySelectorAll(".color-hex");
  for (let i = 0; i < color.length; i++) {
    color[i].style.backgroundColor = generateColor();
    color_text[i].textContent = generateColor();
  }

}

let color_palets = document.getElementsByClassName("color-palet");
let alert_styles = {
  visibility: "visible",
  top: "20px",
  opacity: "1"
}
let alert_styles2 = {
  visibility: "hidden",
  top: "10px",
  opacity: "0"
}

function copyAlert(input, alertbox) {
  input.select();
  document.execCommand("copy")
  setTimeout(() => {
    $(alertbox).css(alert_styles)
  }, 500);
  setTimeout(() => {
    $(alertbox).css(alert_styles2)
  }, 1500);
}

for (let i = 0; i < color_palets.length; i++) {
  color_palets[i].addEventListener("click", () => {
    const hiddenInput = document.createElement("input");
    const alert = document.querySelector(".copy-alert");

    hiddenInput.className = "copyInput";
    hiddenInput.value = color_palets[i].children[1].textContent;
    document.querySelector(".copy-alert").children[0].textContent = hiddenInput.value;
    color_palets[i].appendChild(hiddenInput);



    copyAlert(hiddenInput, alert);

    hiddenInput.remove();
  })
}
