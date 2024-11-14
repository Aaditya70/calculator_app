let display = document.getElementById("display");

function inputValue(val) {
  if (display.innerText === "0") display.innerText = val;
  else display.innerText += val;
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteLast() {
  display.innerText = display.innerText.slice(0, -1) || "0";
}

function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = "Error";
  }
}