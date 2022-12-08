function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');

x.onclick = toggleMenu;


const last = new Date(document.lastModified);
document.querySelector('#last').textContent= last;
const year = new Date();
document.querySelector('#year').textContent = year.getFullYear();