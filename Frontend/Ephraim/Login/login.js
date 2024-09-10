// recuperer les parties prncipales
const firstPart = document.querySelector(".first-part");
const secondPart = document.querySelector(".second-part");
const thirdPart = document.querySelector(".third-part");

//recuperer les bouttons de chaque principale partie
const firstPartButton = document.querySelector(".first-part-button");
const secondPartButton = document.querySelector(".second-part-button");
const thirdPartButton = document.querySelector(".third-part-button");

// recuperer les buttons particuliers de submit
const firstSubmitButton = document.getElementById("first-submit");
const secondSubmitButton = document.getElementById("second-submit");
const thirdSubmitButton = document.getElementById("third-submit");

// recuperer les boutons de retours
const firstReturnButton = document.getElementById("first-return");
const secondReturnButton = document.getElementById("second-return");

// recuperer les step part
const stepNumber = document.getElementById("step-number");


// ecouter un evenement sur le prmier button pour aller a la seconde etape

function firstStepMoove() {
    firstPart.style.display = "none";
    firstPartButton.style.display = "none";
    secondPart.style.display = "block";
    secondPartButton.style.display = "flex";
    stepNumber.innerText = "02"
}
function firstReturnMoove() {
    firstPart.style.display = "block";
    firstPartButton.style.display = "block";
    secondPart.style.display = "none";
    secondPartButton.style.display = "none";
    stepNumber.innerText = "01"
}

firstSubmitButton.addEventListener('click', (e) => {
    e.preventDefault();
    validationName();
    validationPrenoms();
    validationCartNumber();

    const isNameValid = validationName();
    const isPrenomsValid = validationPrenoms();
    const isCartNumberValid = validationCartNumber();
    
    if (isNameValid && isPrenomsValid && isCartNumberValid) {
        firstStepMoove();
    }
    
});

// ecouter un evenement sur le premier button retour 
firstReturnButton.addEventListener('click', () => {
    firstReturnMoove();

});

// ecouter un evenement sur le second button pour aller a la troisieme etape

function secondStepMoove() {
    secondPart.style.display = "none";
    secondPartButton.style.display = "none";
    thirdPart.style.display = "block";
    thirdPartButton.style.display = "flex";
    stepNumber.innerText = "03"
}

function secondReturnMoove() {
    secondPart.style.display = "block";
    secondPartButton.style.display = "flex";
    thirdPart.style.display = "none";
    thirdPartButton.style.display = "none";
    stepNumber.innerText = "02"
}

secondSubmitButton.addEventListener('click', (event) => {
    

    event.preventDefault ;
    validationEmail();
    validationNumber();
    validationSexe();
    const isEmailvalid = validationEmail()
    const isNumberValid = validationNumber()
    if(isEmailvalid && isNumberValid) {
        secondStepMoove();
    }

});

secondReturnButton.addEventListener('click', () => {
    secondReturnMoove();
})

thirdSubmitButton.addEventListener('click',(option)=>{
    option.preventDefault;
    validationNiveau();
    validationParcours();
    validationSpecialite()

})

// validation des champs de la premiere etape 

// recuperer les inputs de  first part
const inputName = document.getElementById("name");
const inputPrenoms = document.getElementById("prenom");
const inputCartNumber = document.getElementById("numCarte");

// creer des expressions regulieres pour chaque champs
const nameRegex = new RegExp("^[a-zA-Z' \s-]+$");
const prenomsRegex = new RegExp("^[a-zA-Zéèêëàäïöüç \s-]+$");
const cartNumberRegex = new RegExp("^[0-9-]+$");



inputName.addEventListener('input', validationName);
inputPrenoms.addEventListener('input', validationPrenoms);
inputCartNumber.addEventListener('input', validationCartNumber);


function validationName() {
    if (nameRegex.test(inputName.value)) {
        checkValidInput(inputName);
        return true;
    } else {
        checkErrorFalse(inputName);
        return false;
    }
}

function validationPrenoms() {
    if (prenomsRegex.test(inputPrenoms.value)) {
        checkValidInput(inputPrenoms);
        return true;
    } else {
        checkErrorFalse(inputPrenoms);
        return false;
    }
}

function validationCartNumber() {
    if (cartNumberRegex.test(inputCartNumber.value)) {
        checkValidInput(inputCartNumber);
        return true;
    } else {
        checkErrorFalse(inputCartNumber);
        return false;
    }
}

function checkErrorFalse(unvalidInput) {
    unvalidInput.style.border = " solid 2px rgb(228, 8, 8) ";
    unvalidInput.focus();
}
function checkValidInput(validInput) {
    validInput.style.border = " solid 2px rgb(67, 196, 8) ";
}

//validation des champs de la deuxième etape 

const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const inputNumber = document.getElementById("number");
const genreElement = document.getElementById("sexe")

// creer les expressions reguliere correspondante

const emailRegex = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z0-9._-]+$");
const numberRegex = new RegExp("^[7-9][0-9]{7}$");


inputEmail.addEventListener('input', validationEmail);
inputNumber.addEventListener('input',validationNumber);
genreElement.addEventListener('input',validationSexe);


function validationEmail() {
    if (emailRegex.test(inputEmail.value)) {
        checkValidInput(inputEmail);
        return true;
    } else {
        checkErrorFalse(inputEmail);
        return false;
    }
}

function validationPassword(){
    if(inputPassword.value.trim() == " "){
        checkErrorFalse(inputPassword);
        return false;
        
    }else{
        checkValidInput(inputPassword);
        return true ;
    }
}

function validationNumber(){
    if (numberRegex.test(inputNumber.value)) {
        checkValidInput(inputNumber);
        return true;
    } else {
        checkErrorFalse(inputNumber);
        return false;
    }
}

function validationSexe(){
    if (genreElement.value === "") {
        checkErrorFalse(genreElement);
    }else{
        checkValidInput(genreElement);
    }
}

// validation des elements de la troisieme partie

const niveauElement = document.getElementById("niveau");
const parcoursElement = document.getElementById("parcours");
const specialiteElement = document.getElementById("specialite");

niveauElement.addEventListener('input',validationNiveau);
parcoursElement.addEventListener('input',validationParcours);
specialiteElement.addEventListener('input',validationSpecialite);

function validationNiveau(){
    if (niveauElement.value === "") {
        checkErrorFalse(niveauElement);
    }else{
        checkValidInput(niveauElement);
    }
}
function validationParcours(){
    if (parcoursElement.value === "") {
        checkErrorFalse(parcoursElement);
    }else{
        checkValidInput(parcoursElement);
    }
}
function validationSpecialite(){
    if (specialiteElement.value === "") {
        checkErrorFalse(specialiteElement);
    }else{
        checkValidInput(specialiteElement);
    }
}

