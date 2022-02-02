const easyButton = document.getElementById("easyButton")
const mediumButton = document.getElementById("mediumButton")
const hardButton = document.getElementById("hardButton")
const counter = document.getElementById("count")
const popup = document.querySelector(".popup-modal");
const modal = document.querySelectorAll(".popup")
const pText = document.querySelector(".winners-or-lose");
const reset1 = document.getElementById("reset1")
const reset2 = document.getElementById("reset2")
const resetSection = document.getElementById("resetSection")
const buttons = document.getElementById("difSection")
const difficulties = { easy: 3, medium: 4, hard: 5 }



let count = 0
counter.textContent = `Movement counter: ${count}`
easyButton.addEventListener("click", () => {
    buttons.classList.add("hide")
    resetSection.classList.remove("hide")

    reset2.addEventListener("click", () => {
        for (i = 1; i <= difficulties.easy; i++) {
            let disco = document.getElementById(`disc${i}`);
            tower1.appendChild(disco)
            count = 0;
            counter.textContent = `Movement counter: ${count}`
        }
        // buttons.classList.remove("hide")        
    })

    reset1.addEventListener("click", () => {
        mainDiv.removeChild(tower1)
        mainDiv.removeChild(tower2)
        mainDiv.removeChild(tower3)
        popup.style.display = "none"
        count = 0;
        counter.textContent = `Movement counter: ${count}`
        buttons.classList.remove("hide")  
        resetSection.classList.add("hide")      
    })

    const tower1 = document.createElement("div");
    const tower2 = document.createElement("div");
    const tower3 = document.createElement("div");

    tower1.classList.add("tower");
    tower2.classList.add("tower");
    tower3.classList.add("tower");

    tower1.id = "tower1";
    tower2.id = "tower2";
    tower3.id = "tower3";

    // CRIANDO DISCOS
    for (i = 1; i <= difficulties.easy; i++) {
        let disco = document.createElement("div");
        disco.id = `disc${i}`
        tower1.appendChild(disco)
    }

    const mainDiv = document.getElementById("towers");

    mainDiv.appendChild(tower1);
    mainDiv.appendChild(tower2);
    mainDiv.appendChild(tower3);

    const towers = document.querySelectorAll(".tower")

    towers.forEach(function (event) {
        event.addEventListener("click", easy)
    })

    let click = true;
    let currentDisc = null;
    function easy(event) {
        let currentTower = event.currentTarget;
        if (click === true) {
            currentDisc = currentTower.lastElementChild
            click = false;
        } else if (click === false) {
            currentTower = event.currentTarget
            if (currentTower.lastElementChild === null || currentTower.lastElementChild.clientWidth > currentDisc.clientWidth) {
                currentTower.appendChild(currentDisc)
                click = true;
                count++
                counter.textContent = `Movement counter: ${count}`
                checkWinCondition();
            } else {
                click = true;
            }
        }

        if (currentTower.lastElementChild === null) {
            currentDisc = null;
            click = true;
        }
    }

    function checkWinCondition() {
        if (towers[2].childElementCount === 3) {
            popup.style.display = "inline-block"
            pText.innerText = "You Won!"
        }
    }
})


mediumButton.addEventListener("click", () => {

    buttons.classList.add("hide")
    resetSection.classList.remove("hide")

    reset2.addEventListener("click", () => {
        for (i = 1; i <= difficulties.medium; i++) {
            let disco = document.getElementById(`disc${i}`);
            tower1.appendChild(disco)
            count = 0;
            counter.textContent = `Movement counter: ${count}`
        }
        // buttons.classList.remove("hide")        
    })

    reset1.addEventListener("click", () => {
        mainDiv.removeChild(tower1)
        mainDiv.removeChild(tower2)
        mainDiv.removeChild(tower3)
        popup.style.display = "none"
        count = 0;
        counter.textContent = `Movement counter: ${count}`
        buttons.classList.remove("hide")  
        resetSection.classList.add("hide")     
    })

    const tower1 = document.createElement("div");
    const tower2 = document.createElement("div");
    const tower3 = document.createElement("div");

    tower1.classList.add("tower");
    tower2.classList.add("tower");
    tower3.classList.add("tower");

    tower1.id = "tower1";
    tower2.id = "tower2";
    tower3.id = "tower3";

    for (i = 1; i <= difficulties.medium; i++) {
        let disco = document.createElement("div");
        disco.id = `disc${i}`
        tower1.appendChild(disco)
    }

    const mainDiv = document.getElementById("towers");

    mainDiv.appendChild(tower1);
    mainDiv.appendChild(tower2);
    mainDiv.appendChild(tower3);

    const towers = document.querySelectorAll(".tower");

    towers.forEach(function (event) {
        event.addEventListener("click", medium);
    })

    let click = true;
    let currentDisc = null;
    function medium(event) {
        let currentTower = event.currentTarget;
        if (click === true) {
            currentDisc = currentTower.lastElementChild;
            click = false;
        } else if (click === false) {
            currentTower = event.currentTarget;
            if (currentTower.lastElementChild === null || currentTower.lastElementChild.clientWidth > currentDisc.clientWidth) {
                currentTower.appendChild(currentDisc);
                click = true;
                count++;
                counter.textContent = `Movement counter: ${count}`;
                checkWinCondition();
            } else {
                click = true;
            }
        }

        if (currentTower.lastElementChild === null) {
            currentDisc = null;
            click = true;
        }
    }

    function checkWinCondition() {
        if (towers[2].childElementCount === 4) {
            popup.style.display = "inline-block"
            pText.innerText = "You Won!"
        }
    }    
})

//  testando umas malandragens

hardButton.addEventListener("click", () => {

    buttons.classList.add("hide")
    resetSection.classList.remove("hide")

    reset2.addEventListener("click", () => {
        for (i = 1; i <= difficulties.hard; i++) {
            let disco = document.getElementById(`disc${i}`);
            tower1.appendChild(disco)
            count = 0;
            counter.textContent = `Movement counter: ${count}`
        }
        // buttons.classList.remove("hide")        
    })

    reset1.addEventListener("click", () => {
        mainDiv.removeChild(tower1)
        mainDiv.removeChild(tower2)
        mainDiv.removeChild(tower3)
        popup.style.display = "none"
        count = 0;
        counter.textContent = `Movement counter: ${count}`
        buttons.classList.remove("hide")  
        resetSection.classList.add("hide")     
    })

    const tower1 = document.createElement("div");
    const tower2 = document.createElement("div");
    const tower3 = document.createElement("div");

    tower1.classList.add("tower");
    tower2.classList.add("tower");
    tower3.classList.add("tower");

    tower1.id = "tower1";
    tower2.id = "tower2";
    tower3.id = "tower3";

    for (i = 1; i <= difficulties.hard; i++) {
        let disco = document.createElement("div");
        disco.id = `disc${i}`
        tower1.appendChild(disco)
    }

    const mainDiv = document.getElementById("towers");

    mainDiv.appendChild(tower1);
    mainDiv.appendChild(tower2);
    mainDiv.appendChild(tower3);

    const towers = document.querySelectorAll(".tower");

    towers.forEach(function (event) {
        event.addEventListener("click", hard)
    })

    let click = true;
    let currentDisc = null;
    function hard(event) {
        let currentTower = event.currentTarget;

        if (click === true) {
            currentDisc = currentTower.lastElementChild;
            click = false;
        } else if (click === false) {
            currentTower = event.currentTarget;
            if (currentTower.lastElementChild === null || currentTower.lastElementChild.clientWidth > currentDisc.clientWidth) {
                currentTower.appendChild(currentDisc);
                click = true;
                count++;
                counter.textContent = `Movement counter: ${count}`;
                checkWinCondition();
            } else {
                click = true;
            }
        }

        if (currentTower.lastElementChild === null) {
            currentDisc = null;
            click = true;
        }
    }

    function checkWinCondition() {
        if (towers[2].childElementCount === 5) {
            popup.style.display = "inline-block"
            pText.innerText = "You Won!"
        }
    }
})
const towers = document.querySelectorAll(".tower")
