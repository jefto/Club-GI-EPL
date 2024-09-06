// recuperer les parties prncipales
const firstPart  = document.querySelector(".first-part");
const secondPart = document.querySelector(".second-part");
const thirdPart  = document.querySelector(".third-part");

//recuperer les bouttons de chaque principale partie
const firstPartButton  = document.querySelector(".first-part-button");
const secondPartButton = document.querySelector(".second-part-button");
const thirdPartButton  = document.querySelector(".third-part-button");

// recuperer les buttons particuliers de submit
const firstSubmitButton  =  document.getElementById("first-submit");
const secondSubmitButton =  document.getElementById("second-submit");
const thirdSubmitButton  =  document.getElementById("third-submit");

// recuperer les boutons de retours
const firstReturnButton  = document.getElementById("first-return");
const secondReturnButton = document.getElementById("second-return");

// recuperer les step part
const stepNumber = document.getElementById("step-number");


// ecouter un evenement sur le prmier button pour aller a la seconde etape

function firstStepMoove(){
    firstPart.style.display = "none";
    firstPartButton.style.display = "none";
    secondPart.style.display = "block";
    secondPartButton.style.display = "flex";
    stepNumber.innerText = "02"
}
function firstReturnMoove(){
    firstPart.style.display = "block";
    firstPartButton.style.display = "block";
    secondPart.style.display = "none";
    secondPartButton.style.display = "none";
    stepNumber.innerText = "01"
}
firstSubmitButton.addEventListener('click',()=>{
    firstStepMoove();
});

// ecouter un evenement sur le premier button retour 
firstReturnButton.addEventListener('click',()=>{
    firstReturnMoove();
});

// ecouter un evenement sur le second button pour aller a la seconde etape

function secondStepMoove(){
    secondPart.style.display = "none";
    secondPartButton.style.display = "none";
    thirdPart.style.display = "block";
    thirdPartButton.style.display = "flex";
    stepNumber.innerText = "03"
}

function secondReturnMoove(){
    secondPart.style.display = "block";
    secondPartButton.style.display = "flex";
    thirdPart.style.display = "none";
    thirdPartButton.style.display = "none";
    stepNumber.innerText = "02"
}

secondSubmitButton.addEventListener('click',()=>{
    firstStepMoove();
    secondStepMoove();
});
secondReturnButton.addEventListener('click',()=>{
    secondReturnMoove();
})
