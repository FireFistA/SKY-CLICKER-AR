class Building {
    constructor(buildingName, baseCps, baseCost, buttonId) {
        this.amountOwned = 0;
        this.baseCps = baseCps / (1000 / tickRate);
        this.cps = 0;
        this.baseCost = baseCost;
        this.cost = baseCost;
        this.buttonId = buttonId;
        this.buildingName = buildingName;
    }

    // Triggered when the player buys a Building
    purchase() {
        score -= this.cost;
        this.amountOwned++;
        totalCollected += this.amountOwned;
        this.cps = this.baseCps * this.amountOwned;
        this.cost = Math.ceil(this.baseCost * 1.15 ** this.amountOwned);
    }

    buttonState() {
        if (score < this.cost) {
            document.getElementById(this.buttonId).disabled = true;
        } else {
            document.getElementById(this.buttonId).disabled = false;
        }
        document.getElementById(this.buttonId).innerHTML =
            'Buy ' +
            this.buildingName +
            ' (Cost: ' +
            Math.ceil(this.cost).toLocaleString() +
            ') <br> Adds ' +
            (this.baseCps * (1000 / tickRate)).toLocaleString() +
            ' Per Second <br> [Owned: ' +
            this.amountOwned +
            ']';
    }
}