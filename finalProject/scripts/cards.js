const urlCards = '/wdd230/finalProject/json/data.json';

async function getTownCards() {
    const response = await fetch(urlCards);
    const data = await response.json();
    displayCards(data.towns);
  }
  
  getTownCards();

  const displayCards = (cards) => {
    const townCards = document.querySelector('section.cardsContainer'); // select the output container element
  
    cards.forEach((town) => {
      let card = document.createElement('section');
      let townImg = document.createElement('img');
      let h3 = document.createElement('h3');
      let pLocation = document.createElement('p');
      let pHighlights = document.createElement('p');
      let liElement = document.createElement("li");
      let aUrl = document.createElement("a");
      
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h3.textContent = town.name;
      pLocation.textContent = `📍${town.location}`;
      pHighlights.textContent = `🏄 ${town.highlights}`;

    
      aUrl.textContent = town.url;
      aUrl.setAttribute('href', town.url);
      liElement.appendChild(aUrl);
       
     
  
      // Build the image logo by setting all the relevant attribute
      townImg.setAttribute('src', town.imageurl);
      townImg.setAttribute('alt', `logo of ${town.name}`);
      townImg.setAttribute('loading', 'lazy');
      townImg.setAttribute('width', '200');
      townImg.setAttribute('height', '200');
  
      // Append the section(card) with the created elements
      card.appendChild(townImg);
      card.appendChild(h3);
      
      card.append(pLocation);
      card.append(pHighlights);
      card.appendChild(liElement);
      
  
      townCards.appendChild(card);
    });
  }
