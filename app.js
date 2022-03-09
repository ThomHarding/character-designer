// import functions and grab DOM elements
import { makeStatsString } from './utils.js';
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
let headChanges = 0;
let midChanges = 0;
let botChanges = 0;
// set state for all of the character's catchphrases
let catchphrases = [];

headDropdown.addEventListener('change', () => {
    // get the value of the head dropdown
    let headValue = headDropdown.value;
    // increment the head change count state
    headChanges++;
    // update the dom for the head (use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)
    let headPath = 'url(./assets/' + headValue.toLowerCase() + '-head.png)';
    headEl.style.backgroundImage = headPath;
    // update the stats to show the new count (refactor to/call displayStats() to do this work)
    displayStats();
});


middleDropdown.addEventListener('change', () => {
    // get the value of the middle dropdown
    let midValue = middleDropdown.value;
    // increment the middle change count state
    midChanges++;
    // update the dom for the middle (NOTE: use style.backgroundImage on the middleEl div instead of trying to set the .src -- it's NOT an img tag!)
    let midPath = 'url(./assets/' + midValue.toLowerCase() + '-middle.png)';
    middleEl.style.backgroundImage = midPath;
    // update the stats to show the new count (refactor to/call displayStats() to do this work)
    displayStats();
});


bottomDropdown.addEventListener('change', () => {
    // get the value of the bottom dropdown
    let botValue = bottomDropdown.value;
    // increment the bottom change count state
    botChanges++;
    // update the dom for the bottom (NOTE use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)
    let botPath = 'url(./assets/' + botValue.toLowerCase() + '-pants.png)';
    bottomEl.style.backgroundImage = (botPath);
    // update the stats to show the new count (refactor to/call displayStats() to do this work)
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    let catchphrase = catchphraseInput.value;
    // push the new catchphrase to the catchphrase array in state
    catchphrases.push(catchphrase);
    // clear out the form input's value so it's empty to the user
    catchphraseInput.value = '';
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)
    displayCatchphrases();
});

function displayStats() {
    // call this function with the correct arguments
    const statsString = makeStatsString(headChanges, midChanges, botChanges);
    // use statsString to change the text content of the reportEl to tell the user how many times they've changed each piece of the state
    reportEl.innerHTML = statsString;
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    catchphrasesEl.innerText = '';
    // loop through each catchphrase in state
    // and for each catchphrase
    for (let phrase of catchphrases) {
    // create an HTML element with the catchphrase as its text content
        let newPhrase = document.createElement('div');
        newPhrase.textContent = phrase;
    // and append that HTML element to the cleared-out DOM
        catchphrasesEl.appendChild(newPhrase);
    }
}
