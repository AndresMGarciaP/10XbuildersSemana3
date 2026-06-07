let count = 0;

const counterEl = document.getElementById("counter");
const greetingEl = document.getElementById("greeting");
const nameInput = document.getElementById("name-input");

function updateCounter() {
  counterEl.textContent = count;
}

document.getElementById("btn-increase").addEventListener("click", () => {
  count += 1;
  updateCounter();
});

document.getElementById("btn-decrease").addEventListener("click", () => {
  count -= 1;
  updateCounter();
});

document.getElementById("btn-reset").addEventListener("click", () => {
  count = 0;
  updateCounter();
});

document.getElementById("btn-greet").addEventListener("click", () => {
  const name = nameInput.value.trim();

  if (!name) {
    greetingEl.textContent = "Por favor, escribe tu nombre.";
    return;
  }

  greetingEl.textContent = `¡Hola, ${name}! Bienvenido al servidor local.`;
});
