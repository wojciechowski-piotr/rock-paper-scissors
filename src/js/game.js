import weapons from './weapons-list';

class Game {
    constructor(pointLimit, roundsLimit) {
        this.pointLimit = pointLimit;
        this.roundsLimit = roundsLimit;
        this.rounds = 0;
        this.p1Points = 0;
        this.p2Points = 0;
        this.p1Rounds = 0;
        this.p2Rounds = 0;
    }
    startGame() {
        weapons.forEach(el => el.createWeapon());
        chooseWeapon.call(this);
    }
    compareWeapons() {
        const p1Weapon = document.querySelector('.player1__weapon-value').textContent;
        const p2Weapon = document.querySelector('.player2__weapon-value').textContent;

        const p1WeaponId = weapons.findIndex(el => el.name === p1Weapon);
        const p2WeaponId = weapons.findIndex(el => el.name === p2Weapon);

        if (p1Weapon === weapons[p2WeaponId].beat) {
            this.p2Points++;
            console.log(`Player 2 win => ${this.p1Points} : ${this.p2Points}`);
        } else if (p2Weapon === weapons[p1WeaponId].beat) {
            this.p1Points++;
            console.log(`Player 1 win => ${this.p1Points} : ${this.p2Points}`);
        } else if (p1Weapon === p2Weapon) {
            console.log(`Draw => ${this.p1Points} : ${this.p2Points}`);
        }
    }
    pointCounter() {
        if (this.p1Points === this.pointLimit) {
            this.p1Rounds++;
            console.log('Player 1 win round!!!');

        } else if (this.p2Points === this.pointLimit) {
            this.p2Rounds++;
            console.log('Player 2 win round!!!');
        }

        if (this.p1Points === this.pointLimit || this.p2Points === this.pointLimit) {
            this.p1Points = 0;
            this.p2Points = 0;
            this.rounds++;
            console.log(`End round ${this.rounds}`);
        }
    }
    /* roundCounter() {

    } */
    displayResult() {
        const p1PointsDisplay = document.querySelector('.result__p1');
        const p2PointsDisplay = document.querySelector('.result__p2');
        const p1RoundsDisplay = document.querySelector('.rounds__p1');
        const p2RoundsDisplay = document.querySelector('.rounds__p2');

        const winnerDisplay = document.querySelector('.winner');

        p1PointsDisplay.innerHTML = this.p1Points;
        p2PointsDisplay.innerHTML = this.p2Points;
        p1RoundsDisplay.innerHTML = this.p1Rounds;
        p2RoundsDisplay.innerHTML = this.p2Rounds;

        if (this.p1Rounds === this.roundsLimit) {
            winnerDisplay.innerHTML = 'Player 1 win!!!';
        } else if (this.p2Rounds === this.roundsLimit) {
            winnerDisplay.innerHTML = 'Player 2 win!!!';
        }
    }
}

function aiGenerate() {
    const computerWeapon = document.querySelector('.player2__weapon-value');
    const randomWeaponsId = weapons[Math.round(Math.random() * (weapons.length - 1))];

    computerWeapon.innerHTML = randomWeaponsId.name;
}

function chooseWeapon() {
    const radios = [...document.querySelectorAll('input[type="radio"]')];
    const selectedWeapon = document.querySelector('.player1__weapon-value');

    radios.forEach(el => {
        el.addEventListener('click', () => {
            selectedWeapon.innerHTML = el.value;

            aiGenerate();
            this.compareWeapons();
            this.pointCounter();
            // this.roundCounter();
            this.displayResult();
        });
    });
}

export default Game;