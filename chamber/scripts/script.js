// This is one of the reference I used to customize my date. I added also my codepen code.
// https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/
// https://codepen.io/Yoav-Galindo-the-decoder/pen/mdzPNpG?editors=1010





// This is an example of the date format I need "Monday, 22 November 2021"

// With "new Date()" method I get this "Thu May 11 2023 10:26:55 GMT-0600 (Mountain Daylight Time)"
const d = new Date();

// With "getFullYear()" method I get this "2023"
const fullYear = d.getFullYear();

// With "getDate()" method I get this "11"
const date = d.getDate();

// This is the resource I used to get the first day of the week and after that add 3 days to get the Wednesday date.

// https://stackoverflow.com/questions/5210376/how-to-get-first-and-last-day-of-the-current-week-in-javascript

// With this code I don't need change the Wednesday date manually.
const mondaytDate = date - d.getDay();
const wednesdayDate = mondaytDate + 3;

document.querySelector('.banner').innerHTML = ` &#128073; COME JOIN US FOR THE CHAMBER MEETING ON WEDNESDAY ${wednesdayDate} AT 7:00 P.M &#128072;`;

// to get the number of the month I use this method "getMonth()" and I'll get this "4" that is May
// to get the number of the day I use this method "getDay()" and I'll get this "4" that is Thursday

// To get the name of the month I need to create an array to relate this with the number of the month.
const monthsNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
  // To get the name of the day I need to create an array to relate this with the number of the day.
  const daysNames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];

const monthName = monthsNames[d.getMonth()];
const dayName = daysNames[d.getDay()];


// Now that I have all the elements that I need to customize my date I only need to use the DOM to access to my HTML and apply it.

// I use the method querySelector to access to the element with the ID #currentDate to put my customized date dynamically.
document.querySelector("#currentDate").innerHTML = 

// I'm gonna use the Template literals to use the variable already declared and use to show the customized date.
// A reference to the Template literals topic.
// https://www.w3schools.com/js/js_string_templates.asp
`${dayName}, ${date} ${monthName} ${fullYear}`;

// Footer copyright symbol and current Year.
document.querySelector('#currentYear').innerHTML = `©${fullYear} SLC UT Chamber |`

// Variable needed to the Last Modification.
const lastModified = new Date(document.lastModified)
const dateLastMod = lastModified.toLocaleDateString();
const hoursLastMod =lastModified.getHours();
const minLastMod = lastModified.getMinutes();
const secLastMod = lastModified.getSeconds();


// querySelector and innerHTML method to put the last updated through the Template literals.
document.querySelector('#lastModified').innerHTML = `Last Updated: ${dateLastMod} ${hoursLastMod}:${minLastMod}:${secLastMod}`;

// Toggle button 
function toggleMenu() {
	document.querySelector("#primaryNav").classList.toggle("active");
	document.querySelector("#hamburgerBtn").classList.toggle("active");
}
const hamburgerBtnSpot = document.querySelector("#hamburgerBtn");
hamburgerBtnSpot.onclick = toggleMenu;

const bannerElement = document.querySelector('.banner');
const today = dayName;
if (today === "Monday" || today=== "Tuesday") {
	bannerElement.style = 'display:block';
}
// ----------------------------------Lazy Loading----------------------------//
// Select the images I want to load by the selector querySelectorAll selecting these by the html element img and the attribute [data-src].
const imgToLoad = document.querySelectorAll("img[data-src]");

// These are the options to load the images.
const imageOptions = {
  threshold: 1,
  rootMargin: "0px 0px 200px 0px",
};

// This fuction is going to remove the data-src attribute and replace for src attribute.
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

// Check if the Intersection Observer is supported.
if ("IntersectionObserver" in window) {
  const imgObserver = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
    // Use the image options.
  }, imageOptions);
  imgToLoad.forEach((img) => {
    imgObserver.observe(img);
  });
} else {
  imgToLoad.forEach((img) => {
    loadImages(img);
  });
}


const dateHours = `${dateLastMod} ${hoursLastMod}:${minLastMod}`;
// document.getElementById('hidden').value = dateHours;

// Local Storage

// localStorage.setItem('lastVisit', '2023-02-22');

// displayDaysSinceLastVisit();

// function displayDaysSinceLastVisit() {
//   const visitsDisplay = document.querySelector('.daysSinceLastVisit');

//   const lastVisit = localStorage.getItem('lastVisit');

//   if (!lastVisit) {
//     visitsDisplay.innerText = 'This is your first visit';
    
//     return;
//   }

//   const lastVisitDate = Date.parse(lastVisit);
  
//   if (!lastVisitDate) {
//     // Stored date is not a valid format
//     return;
//   }

//   const currentDate = new Date();

//   const difference = currentDate - lastVisitDate;
//   const differenceInDays = Math.floor(difference / (1000 * 60 * 60 * 24));

//   visitsDisplay.innerText = `The last visit was ${differenceInDays}days ago`;
// }
//---------------------------------------------- Discover page ----------------------------------------------



if (localStorage.getItem("firstVisit") === null) {

  localStorage.setItem("firstVisit", Date.now());
  
  }
  
  let lastVisit = Date.now() - localStorage.getItem("firstVisit");
  
  let seconds = lastVisit / 1000;
  let minutes = seconds / 60;
  let hours = minutes / 60;
  let days = Math.floor(hours / 24);
  
  if(days === 1) {
      document.querySelector(".lastVisit").textContent = `⏰ Time since your last visit ${days} day ago`;
  }
  
  else{
      document.querySelector(".lastVisit").textContent = '🥳 Welcome this is your first visit 🤗 ';
  }

