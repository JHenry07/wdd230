// populating the random spotlights --------------------

//variables and arrays ---------
let path = "data.json"
const spotlight1 = document.querySelector(".spot1")
const spotlight2 = document.querySelector(".spot2")
const spotlight3 = document.querySelector(".spot3")
const elements =[spotlight1, spotlight2, spotlight3]
const ranNumbers = []
const loopTime = 3
while (ranNumbers.length < 3){
    for (let i = 0; i < loopTime; i++) {
        let ran_num = Math.floor(Math.random() * 9);
        if (!ranNumbers.includes(ran_num)) {
            ranNumbers.push(ran_num)
        }}}
const spotlightedCompanies = []

// functions --------------------------

async function fetchJSON(resource) {
    const response = await fetch(resource)
    if (response.ok) {
        const businesses = await response.json();
        ranNumbers.forEach(number =>
            spotlightedCompanies.push(businesses[number]))
        for (let i = 0; i < loopTime; i++){
            fillContent(spotlightedCompanies[i], elements[i])}}}

function fillContent(business, element) {
    let cName = document.createElement("h2");
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phoneNumber = document.createElement('p');
    let website = document.createElement('p');

    

    cName.textContent = business.name;
    cName.classList.add("company-name");
    logo.setAttribute("src", `${business.image}`);
    logo.setAttribute("style", "width:100%");
    logo.setAttribute("alt", `${business.name} logo`);
    logo.setAttribute("loading", "lazy");
    website.setAttribute("href", `${business.website}`);
    address.textContent = business.address;
    phoneNumber.textContent = business.phone;
    website.textContent = business.website;

    element.appendChild(cName);
    element.appendChild(logo);
    element.appendChild(address);
    element.appendChild(phoneNumber);
    element.appendChild(website);
}

// run code --------------

const businesses = fetchJSON(path);