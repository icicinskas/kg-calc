/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const input = document.getElementById("search");
const calculateValue = document.getElementById("submit-btn");
const constant = [2.20464, 0.001, 35.274];
const check = 0;

calculateValue.addEventListener("click", function (e) {
  e.preventDefault();

  if (!input.value) return alert("Nieko neįrašėte, įveskite duomenis!");
  if (isNaN(input.value)) {
    alert(`"${input.value}" ne skaičius, įveskite duomenis!`);
    input.value = "";
    return;
  }

  const output = document.getElementById("output");
  const inputValue = Number(input.value);
  const svarai = document.createElement("h3");
  svarai.innerText = `${inputValue}kg = ${(inputValue * constant[0]).toFixed(
    2
  )} pound`;
  const gramai = document.createElement("h3");
  gramai.innerText = `${inputValue}kg = ${inputValue / constant[1]} g`;
  const uncijos = document.createElement("h3");
  uncijos.innerText = `${inputValue}kg = ${(inputValue * constant[2]).toFixed(
    2
  )} oz`;
  const br = document.createElement("br");
  output.append(svarai, gramai, uncijos, br);

  input.value = "";
});

calculateValue.addEventListener("click", function () {
  const paragraphs = output.querySelectorAll("h3");
  if (paragraphs.length) {
    paragraphs[paragraphs.length - 4].remove();
    paragraphs[paragraphs.length - 5].remove();
    paragraphs[paragraphs.length - 6].remove();
  }
  const br = output.querySelectorAll("br");
  if (br.length) {
    br[br.length - 2].remove();
  }
});
