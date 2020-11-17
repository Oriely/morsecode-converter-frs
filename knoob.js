//Model//
let _app = document.getElementById('app');
let _input = '';
let _output = '';


//View//
function showView() {
    let html;
    
    html = `
    <label>Type in what you want to convert</label>
    <input id="input" type="text" oninput="noegreier()" >
    
    <div id="resultatBox"></div>

    
    `;

    _app.innerHTML += html
}

showView();
//Controller//

//- function that converts from morsecode to letters

//- function that converts from letters to morsecode

//- function that updates the view