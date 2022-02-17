// Localstorage ir input
// Sukurti tuščią masyvą.
// Sukurti input, kuris pridės žodžius į masyvą.
// Suprogramuoti žodžių iš masyvo pridėjimą į DOM.
// Suprogramuoti žodžių iš masyvo pridėjimą į localstorage.
// Suprogramuoti žodžių pridėjimą iš localstorage atgal į masyvą.
// Papildomai: suprogramuoti žodžių ištrinimą iš masyvo ir per DOM.
"use strict";

let divas = document.getElementById("divas");
let inputas = document.getElementById("inputas");
let buttonas = document.getElementById("buttonas");
let arreyus = [];

class Zodis {
  constructor(word) {
    this.word = word;
  }
  writeToDiv() {
    if (inputas.length <= 1) {
      return alert("Irasyk ka nors, negu sunku!");
    } else {
      divas.innerText += " " + inputas.value + ";";
    }
  }
}

buttonas.addEventListener("click", loadWordsToDiv);

function loadWordsToDiv() {
  if (inputas.value.length <= 0) {
    alert("Irasyk ka nors, negu sunku!!");
  } else {
    let word = new Zodis(inputas.value);
    arreyus.push(word);
    localStorage.setItem("arreyus", JSON.stringify(arreyus));
    word.writeToDiv();
    inputas.value = "";
  }
}
function loadWordsFromStorage() {
  var restoredWords = localStorage.getItem("word");
  if (restoredWords == null) return;
  restoredWords = JSON.parse(restoredWords);
  for (var x of restoredWords) {
    var zodis = new Zodis(x.zodis);
    arreyus.push(zodis);
    person.writeToDiv();
  }
}

loadWordsFromStorage();
