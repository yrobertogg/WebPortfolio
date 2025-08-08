// variable declarations.
const date = new Date();
const fullYear = date.getFullYear();
const lastModified = new Date(document.lastModified)
const dateLastMod = lastModified.toLocaleDateString();
const hoursLastMod =lastModified.getHours();
const minLastMod = lastModified.getMinutes();
const secLastMod = lastModified.getSeconds();

// DOM.
document.querySelector("#currentYear").innerHTML = `© ${fullYear} | Roberto Galindo | Utah |`;
document.querySelector("#lastUpdated").innerHTML = `Last Updated: ${dateLastMod} ${hoursLastMod}:${minLastMod}:${secLastMod}`;