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

const dropdown1 = document.getElementById('fruit1');
dropdown1.length = 0;

const dropdown2 = document.getElementById('fruit2');
dropdown2.length = 0;

const dropdown3 = document.getElementById('fruit3');
dropdown3.length = 0;

const urljson = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

fetch(urljson)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.warn('Looks like there was a problem. Status Code: ' + 
          response.status);  
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(data) {  
        let option;
    
    	for (let i = 0; i < data.length; i++) {
          option = document.createElement('option');
      	  option.text = data[i].name;
      	  dropdown1.add(option);
          
    	} 
        for (let i = 0; i < data.length; i++) {
            option = document.createElement('option');
            option.text = data[i].name; 
            dropdown2.add(option);
            
          } 
        for (let i = 0; i < data.length; i++) {
            option = document.createElement('option');
            option.text = data[i].name;
            dropdown3.add(option);
          }    
      });  
    }  
  )  
  .catch(function(err) {  
    console.error('Fetch Error -', err);  
  });
