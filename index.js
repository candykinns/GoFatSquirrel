let gem = document.querySelector(".acorn-cost")
let parsedGem = parseFloat(gem.innerHTML)

let clickerCost = document.querySelector(".clicker-cost")
let parseClickerCost = parseFloat(clickerCost.innerHTML)
let clickerLevel = document.querySelector(".clicker-level")
let clickerIncrease = document.querySelector(".clicker-increase")
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML)

let ezoCost = document.querySelector(".ezo-cost")
let parseEzoCost = parseFloat(ezoCost.innerHTML)
let ezoLevel = document.querySelector(".ezo-level")
let ezoIncrease = document.querySelector(".ezo-increase")
let parsedEzoIncrease = parseFloat(ezoIncrease.innerHTML)

let redCost = document.querySelector(".red-cost")
let parseRedCost = parseFloat(redCost.innerHTML)
let redLevel = document.querySelector(".red-level")
let redIncrease = document.querySelector(".red-increase")
let parsedRedIncrease = parseFloat(redIncrease.innerHTML)

let apc = 1; // acorns per click

let aps = 0; // acorns per second

function incrementAcorn() {
        gem.innerHTML = Math.round(parsedGem += apc);
    }

function buyClicker() {
    if (parsedGem >= parseClickerCost) {
        parsedGem -= parseClickerCost;
        gem.innerHTML = Math.round(parsedGem);

        clickerLevel.innerHTML++;

        parsedClickerIncrease = parseFloat((parsedClickerIncrease * 1.03).toFixed(2));
        clickerIncrease.innerHTML = parsedClickerIncrease;
        apc += parsedClickerIncrease;

        parseClickerCost = parseFloat((parseClickerCost * 1.08).toFixed(2)); // Ensure precision
        clickerCost.innerHTML = Math.round(parseClickerCost); // Update the displayed cost
    } 
}

function buyEzo() {
    if (parsedGem >= parseEzoCost) {
        parsedGem -= parseEzoCost;
        gem.innerHTML = Math.round(parsedGem);

        ezoLevel.innerHTML++;

        parsedEzoIncrease = parseFloat((parsedEzoIncrease * 1.03).toFixed(2));
        ezoIncrease.innerHTML = parsedEzoIncrease;
        aps += parsedEzoIncrease;

        parseEzoCost = parseFloat((parseEzoCost * 1.08).toFixed(2));
        ezoCost.innerHTML = Math.round(parseEzoCost);
    }
}

function buyRed() {
    if (parsedGem >= parseRedCost) {
        parsedGem -= parseRedCost;
        gem.innerHTML = Math.round(parsedGem);

        redLevel.innerHTML++;

        parsedRedIncrease = parseFloat((parsedRedIncrease * 1.03).toFixed(2));
        redIncrease.innerHTML = parsedRedIncrease;
        aps += parsedRedIncrease;

        parseRedCost = parseFloat((parseRedCost * 1.08).toFixed(2));
        redCost.innerHTML = Math.round(parseRedCost);
    }
}

setInterval(() => {
    parsedGem += aps / 10
    gem.innerHTML = Math.round(parsedGem);
}, 100); // Execute every 1 second