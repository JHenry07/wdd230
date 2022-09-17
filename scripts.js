const last = new Date(document.lastModified);
document.querySelector('#last').textContent= last;
const year = new Date();
document.querySelector('#year').textContent = year.getFullYear();