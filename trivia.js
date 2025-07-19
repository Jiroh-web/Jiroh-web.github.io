let selectedGravity = null;
let selectedPlanet = '';

const buttons = document.querySelectorAll(".planet-button");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");
    selectedGravity = parseFloat(button.getAttribute("data-gravity"));
    selectedPlanet = button.textContent;
  });
});

function calculate() {
  const weight = parseFloat(document.getElementById("weightInput").value);
  const resultDiv = document.getElementById("result");

  if (!selectedGravity) {
    resultDiv.innerHTML = "🌍 Please select a planet.";
    return;
  }

  if (isNaN(weight) || weight <= 0) {
    resultDiv.innerHTML = "⚖️ Please enter a valid weight.";
    return;
  }

  const converted = (weight * selectedGravity).toFixed(2);
  resultDiv.innerHTML = `🌌 On <strong>${selectedPlanet}</strong>, your weight would be <strong>${converted} kg</strong>.`;
}