const share = document.querySelector(".share-icon")

const container = document.querySelector(".share-container")

const arrow = document.querySelector(".arrow-down")

share.addEventListener("click", ()=>{
container.classList.toggle("hidden");
arrow.classList.toggle("hidden");

})