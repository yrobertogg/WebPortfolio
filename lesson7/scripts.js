// variable declarations.
const date = new Date();
const fullYear = date.getFullYear();
const lastModified = new Date(document.lastModified)
const dateLastMod = lastModified.toLocaleDateString();
const hoursLastMod =lastModified.getHours();
const minLastMod = lastModified.getMinutes();
const secLastMod = lastModified.getSeconds();

// DOM.
document.querySelector("#currentYear").innerHTML = `© ${fullYear} | Roberto Galindo | Utah .:|:.`;
document.querySelector("#lastUpdate").innerHTML = `Last Updated: ${dateLastMod} ${hoursLastMod}:${minLastMod}:${secLastMod}`;

//Loding Images

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