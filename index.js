const target = document.getElementById("target");
let array = ["développeur", "créatif", "intégrateur"];

const createLetter = () => {
    const letter = document.createElement("span");
    target.appendChild(letter);

    letter.textContent = array[0][0];
};

createLetter();