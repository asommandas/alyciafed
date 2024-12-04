// JavaScript Document

//



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