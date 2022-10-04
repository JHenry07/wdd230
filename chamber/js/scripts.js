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
  