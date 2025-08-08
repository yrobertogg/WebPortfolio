const urlDirectory = '/wdd230/chamber/json/data.json';

async function getDirectory() {
    const response = await fetch(urlDirectory);
    const data = await response.json();
    displayDirectory(data.directory);
  }
  
  getDirectory();

  const displayDirectory = (directory) => {
    const cards = document.querySelector('main.directory'); // select the output container element
  
    directory.forEach((bussiness) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let logo = document.createElement('img');
      let pLocation = document.createElement('p');
      let pPhone = document.createElement('p');
      let liElement = document.createElement("li");
      let aUrl = document.createElement("a");
      
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = bussiness.name;
      pLocation.textContent = `📍${bussiness.location}`;
      pPhone.textContent = `☎ ${bussiness.number}`;

    
      aUrl.textContent = bussiness.url;
      aUrl.setAttribute('href', bussiness.url);
      liElement.appendChild(aUrl);
       
     
  
      // Build the image logo by setting all the relevant attribute
      logo.setAttribute('src', bussiness.imageurl);
      logo.setAttribute('alt', `logo of ${bussiness.name}`);
      logo.setAttribute('loading', 'lazy');
      logo.setAttribute('width', '200');
      logo.setAttribute('height', '200');
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(logo);
      card.append(pLocation);
      card.append(pPhone);
      card.appendChild(liElement);
      
  
      cards.appendChild(card);
    });
  }
  const gridbutton = document.querySelector("#gridIcon");
  const listbutton = document.querySelector("#listIcon");
  const display = document.querySelector(".directory");
  
  // The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.
  
  gridbutton.addEventListener("click", () => {
      // example using arrow function
      display.classList.add("grid");
      display.classList.remove("list");
  });
  
  listbutton.addEventListener("click", showList); // example using defined function
  
  function showList() {
      display.classList.add("list");
      display.classList.remove("grid");
  }