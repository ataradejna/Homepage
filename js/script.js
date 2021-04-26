console.log("Cześć!");

let button = document.querySelector(".button");
let imageContainer = document.querySelector(".imageContainer");
let body = document.querySelector(".body")
let backgroundButton = document.querySelector(".backgroundButton")

button.addEventListener("click", () => {
    if (button.innerText == "Schowaj mnie") {
        imageContainer.classList.add("hidden");
        button.innerText = "Pokaż mnie"
    }
    else if (button.innerText === "Pokaż mnie") {
        imageContainer.classList.remove("hidden")
        button.innerText = "Schowaj mnie";
    }
});

backgroundButton.addEventListener("click", () => {
    body.classList.toggle("secondBackground")
})