function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');

x.onclick = toggleMenu;

document.addEventListener("DOMContentLoaded", function() { 
    // use query selector to get the the span element
    const year = document.querySelector('#year');
    // update the text to be the current year
    year.textContent = new Date().getFullYear();
  
    //update the last modified text
    document.getElementById("last-modified").innerHTML = document.lastModified;
  });

const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;

// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
// show todays date.
todayDisplay.textContent = Date.now();

function getNumberOfDays(start, end) {
  const date1 = new Date(start);
  const date2 = new Date(end);

  // One day in milliseconds
  const oneDay = 1000 * 60 * 60 * 24;

  // Calculating the time difference between two dates
  const diffInTime = date2.getTime() - date1.getTime();

  // Calculating the no. of days between two dates
  const diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays;
}

console.log(getNumberOfDays("2/1/2021", "3/1/2021"));


const request = './json/data.json';
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

    // /Build the image attributes by using the setAttribute values. 
    portrait.setAttribute('src', business.image);
    portrait.setAttribute('alt', `Logo for ${business.name} - ${business.level} level`);
    portrait.setAttribute('loading', 'lazy');

    //Append the section card with the h2 element
    card.appendChild(h2);
    card.appendChild(parag);
    card.appendChild(parag1);
    card.appendChild(portrait);

    //Append the existing html div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
};