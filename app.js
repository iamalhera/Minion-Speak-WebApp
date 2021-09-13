var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

function clickHandeler() {
    outputDiv.innerText = "shaka "+txtInput.value ;
};

btnTranslate.addEventListener("click", clickHandeler );