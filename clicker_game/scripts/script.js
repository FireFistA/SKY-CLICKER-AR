const tickRate = 1000 / 30; // 30 frames per second(fps)
let score = 0;
let totalCollected = 0;

// Buildings are made from classes here.
// Building(name, clicks per second, base cost, button ID)
let cursor = new Building('Cursor', 0.1, 15, 'buySingleCursor');
let energyDrink = new Building('Energy Drink', 1, 100, 'buyEnergyDrink');
let tendies = new Building('Tendies', 8, 1100, 'buyTendies');
let stonks = new Building('Stonks', 47, 12000, 'buyStonks');
let will = new Building('Will', 64, 14000, 'buyWill');

// Manual click function
function scorePlusPlus() {
    score++;
}
function totalcPlusPlus() {
    totalCollected++;
}

// Increases the score by the current clicks-per-second
function incScore() {
    score += cursor.cps + energyDrink.cps + tendies.cps + stonks.cps + will.cps;
}
function incTotal() {
    totalCollected = cursor.amountOwned + energyDrink.amountOwned + tendies.amountOwned + stonks.amountOwned + will.amountOwned;
}

// Updates the states of all the Building buttons
function updateButtons() {
    cursor.buttonState();
    energyDrink.buttonState();
    tendies.buttonState();
    stonks.buttonState();
    will.buttonState();
}

// Everything in the following function updates every tick as set at the top
function updatePage() {
    incScore();
    incTotal();
    updateButtons();
    document.getElementById('score').innerHTML =
        Math.floor(score).toLocaleString();
    document.getElementById('totalCollected').innerHTML =
        Math.floor(totalCollected).toLocaleString();
}
setInterval(updatePage, tickRate);
