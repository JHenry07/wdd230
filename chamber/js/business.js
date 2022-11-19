const request = 'data.json';
const cards = document.querySelector('.cards');

fetch(request)
    .then(function (response) {
        return response.json();
    }) 
    .then(function (jsonObject) {
        // console.table(jsonObject); //Temporary checking for valid response and data parsing
        const businesses = jsonObject['businesses'];
        businesses.forEach(displayBusinesses);
        // prophets.forEach(ordinalNumbers)
    });

function displayBusinesses(business){

    let card = document.createElement('section')
    let h2 = document.createElement('h2')
    let parag = document.createElement('p')
    let parag1 = document.createElement('p')
    let parag2 = document.createElement('p')
    let portrait = document.createElement('img')

    //change the textContent property of the h2 element to contain the 
    //prophet's full name 
    h2.textContent = `${business.name}`;

    //change the textContent property of the p element to contain the 
    //prophet's birth date
    parag.textContent = `Website: ${business.website}`;

    //change the textContent property of the p element to contain the 
    //prophet's place pf birth
    parag1.textContent = `Address: ${business.address}`;

    parag2.textContent = `Phone Number: ${business.phone}`;

    // /Build the image attributes by using the setAttribute values. 
    portrait.setAttribute('src', business.image);
    portrait.setAttribute('alt', `Logo for ${business.name} - ${business.level} level`);
    portrait.setAttribute('loading', 'lazy');

    //Append the section card with the h2 element
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(parag);
    card.appendChild(parag1);
    card.appendChild(parag2);

    //Append the existing html div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
};