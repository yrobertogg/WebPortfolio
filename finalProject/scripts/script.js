// ----------------------- Current Year -----------------------*
// Get the date method and save it in a variable.
const date = new Date();
const fullYear = date.getFullYear();

// Copyright symbol and current Year.
document.querySelector('#currentYear').innerHTML = `©${fullYear} Bountiful Foods |`


// ------------------------ Last Modification ---------------------*
// Variables needed.
const lastModified = new Date(document.lastModified)
const dateLastMod = lastModified.toLocaleDateString();
const hoursLastMod =lastModified.getHours();
const minLastMod = lastModified.getMinutes();
const secLastMod = lastModified.getSeconds();


// querySelector and innerHTML method to put the last updated through the Template literals.
document.querySelector('#lastModified').innerHTML = `Updated Date: ${dateLastMod} ${hoursLastMod}:${minLastMod}:${secLastMod}`;

// ----------------------- Toggle button -------------------------*
function toggleMenu() {
	document.querySelector("#primaryNav").classList.toggle("active");
	document.querySelector("#hamburgerBtn").classList.toggle("active");
}
const hamburgerBtnSpot = document.querySelector("#hamburgerBtn");
hamburgerBtnSpot.onclick = toggleMenu;

// ----------------------- Current Date --------------------------*
const daysNames = [
	"Sun",
	"Mon",
	"Tues",
	"Wed",
	"Thur",
	"Fri",
	"Sat"
];
const dateNum = date.getDate();
const dayName = daysNames[date.getDay()];


// Now that I have all the elements that I need to customize my date I only need to use the DOM to access to my HTML and apply it.

// I use the method querySelector to access to the element with the ID #currentDate to put my customized date dynamically.
document.querySelector(".currentDate").innerHTML = 

// I'm gonna use the Template literals to use the variable already declared and use to show the customized date.
// A reference to the Template literals topic.
// https://www.w3schools.com/js/js_string_templates.asp
`${dayName} ${dateNum}`;