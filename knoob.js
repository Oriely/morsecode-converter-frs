
//Model//
let html = '';
let _app = document.getElementById('app');
let _input;
let _output;
var object = {
    "morse": [ '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....','..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.','--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-','-.--', '--..', ' ', '·−·−', '−−−·', '·−−·−'],
    "letters": ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', 'æ', 'ø', 'å'], 
  };

let _result = '';
updateView();

//View//

function updateView() {

    html = `
    <label>Type in what you want to convert</label>
    <input id="input-field" type="text" oninput="inputSomething()">
    
    <span id="output-field"></span>

    
    `;

    _app.innerHTML = html;
}
//Controller//

//- function that converts from morsecode to letters
function inputSomething() {
    
}
//- function that converts from letters to morsecode
function output() {
    output = "";

    updateView();
}
//- function that updates the view

if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateView());
    _input = document.getElementById('input-field');
    _output = document.getElementById('output-field');
    ''
} else {
    //The DOMContentLoaded event has already fired. Just run the code.

    updateView();

}