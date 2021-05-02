{
    const welcome = () => {
        console.log("Cześć!");
    };

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        body.classList.toggle("background--special");
    };

    const hideImage = () => {
        const imageContainer = document.querySelector(".container__image");
        imageContainer.classList.toggle("hidden");
        imageButton.innerText = imageContainer.classList.contains("hidden") ? "Pokaż mnie" : "Schowaj mnie";
    };

    const init = () => {
        const imageButton = document.querySelector(".js-imageButton");
        const backgroundButton = document.querySelector(".js-backgroundButton"); //dlaczego nie muszę deklarować imageButton w funkcji hideImage skoro w tej funkcji zmieniam innerTekst?
        backgroundButton.addEventListener("click", toggleBackground);
        imageButton.addEventListener("click", hideImage);
    };
    
    welcome();

    init();
}










