// JavaScript Document

//

// De les
// openen hamburger menu
const openButton = document.querySelector("header > button");
const deNav = document.querySelector("header nav:nth-of-type(1)");

openButton.onclick = openMenu;

function openMenu() {
    deNav.classList.add("toonMenu")
}

// sluiten hamburger menu
const sluitButton = document.querySelector("header nav:nth-of-type(1) button");

sluitButton.onclick = sluitMenu;

function sluitMenu() {
    deNav.classList.remove("toonMenu")
}

// chat box
const chatButton = document.querySelector("main button");

const chatDialog = document.querySelector("main dialog");

chatButton.addEventListener("click", () => {
  chatDialog.show();
});

// Sanne 
// detail summary 

function checkOfDetailsOpenOfDichtMoeten() {
    const alleDetails = document.querySelectorAll("footer details");
    console.log("Functie wordt aangeroepen");
    
    alleDetails.forEach(eenDetails => {
      if(window.innerWidth > 1200) {
        eenDetails.open = true;
      } else {
        eenDetails.open = false;
      }
    } );
  }
  
  // als je de pagina opent
  checkOfDetailsOpenOfDichtMoeten();
  
  // als je pagine resized
  window.onresize = checkOfDetailsOpenOfDichtMoeten;
  
  

