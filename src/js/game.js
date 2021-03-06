import weapons from './weapons-list';

class Game {
    constructor() {
        this.pointLimit = 3;
        this.roundsLimit = 1;
        this.rounds = 0;
        this.p1Points = 0;
        this.p2Points = 0;
        this.p1Rounds = 0;
        this.p2Rounds = 0;
        this.p1Name = null;
        this.p2Name = null;
    }
    startGame() {
        const startBtn = document.querySelector('.start-game__btn');

        startBtn.addEventListener('click', this.newGame);
        weapons.forEach(el => el.createWeapon());
        this.chooseWeapon();
        this.playAgain();
    }
    compareWeapons() {
        const p1Weapon = document.querySelector('.player1__weapon-value').textContent;
        const p2Weapon = document.querySelector('.player2__weapon-value').textContent;

        const p1WeaponId = weapons.findIndex(el => el.name === p1Weapon);
        const p2WeaponId = weapons.findIndex(el => el.name === p2Weapon);

        this.newGame.call(this);

        if (p1Weapon === weapons[p2WeaponId].beat) {
            this.p2Points++;
            console.log(`${this.p2Name} win => ${this.p1Points} : ${this.p2Points}`);
        } else if (p2Weapon === weapons[p1WeaponId].beat) {
            this.p1Points++;
            console.log(`${this.p1Name} win => ${this.p1Points} : ${this.p2Points}`);
        } else if (p1Weapon === p2Weapon) {
            console.log(`Draw => ${this.p1Points} : ${this.p2Points}`);
        }
    }
    pointCounter() {
        this.newGame.call(this);

        if (this.p1Points === this.pointLimit) {
            this.p1Rounds++;
            console.log(`${this.p1Name} win round!!!`);

        } else if (this.p2Points === this.pointLimit) {
            this.p2Rounds++;
            console.log(`${this.p2Name} win round!!!`);
        }

        if (this.p1Points === this.pointLimit || this.p2Points === this.pointLimit) {
            this.p1Points = 0;
            this.p2Points = 0;
            this.rounds++;
            console.log(`End round ${this.rounds}`);
        }
    }
    displayResult() {
        this.newGame.call(this);

        const p1PointsDisplay = document.querySelector('.result__p1');
        const p2PointsDisplay = document.querySelector('.result__p2');
        const p1RoundsDisplay = document.querySelector('.rounds__p1');
        const p2RoundsDisplay = document.querySelector('.rounds__p2');

        const winnerDisplay = document.querySelector('.winner');

        const radios = [...document.querySelectorAll('input[type="radio"]')];

        p1PointsDisplay.innerHTML = this.p1Points;
        p2PointsDisplay.innerHTML = this.p2Points;
        p1RoundsDisplay.innerHTML = this.p1Rounds;
        p2RoundsDisplay.innerHTML = this.p2Rounds;


        if (this.p1Rounds === this.roundsLimit) {
            winnerDisplay.innerHTML = `${this.p1Name} win!!!`;
            radios.forEach(el => {
                el.setAttribute('disabled', 'true');
                el.checked = false;
            });
        } else if (this.p2Rounds === this.roundsLimit) {
            winnerDisplay.innerHTML = `${this.p2Name} win!!!`;
            radios.forEach(el => {
                el.setAttribute('disabled', 'true');
                el.checked = false;
            });
        }
    }
    playAgain() {
        const playAgainBtn = document.querySelector('.play-again__btn');

        playAgainBtn.addEventListener('click', () => {
            this.p1Name = null;
            this.p2Name = null;
            this.p1NameInput = '';
            this.p2NameInput = '';
            window.location.reload(true);
        });
    }
    chooseWeapon() {
        const radios = [...document.querySelectorAll('input[type="radio"]')];
        const selectedWeapon = document.querySelector('.player1__weapon-value');

        radios.forEach(el => {
            el.addEventListener('click', () => {
                selectedWeapon.innerHTML = el.value;

                aiGenerate();
                this.compareWeapons();
                this.pointCounter();
                this.displayResult();
                
            });
        });
    }

    newGame() {

        let p1NameInput = document.querySelector('#p1name').value;
        let p2NameInput = document.querySelector('#p2name').value;
        let pointInput = document.querySelector('#point-limit').value;
        let roundInput = document.querySelector('#round-limit').value;
    
        const p1Name = document.querySelector('.p1-name');
        const p2Name = document.querySelector('.p2-name');
        
        const startGameBox = document.querySelector('.start-game');

        pointInput < 0 || roundInput < 0 ? 
            startGameBox.style.display = 'flex' :
            startGameBox.style.display = 'none' ;


        if (p1NameInput == '') {
            p1NameInput = 'Player 1';
            this.p1Name = p1NameInput;
        }
        
        if (p2NameInput == '') {
            p2NameInput = 'Player 2';
            this.p1Name = p2NameInput;
        }
    
        this.p1Name = p1NameInput;
        this.p2Name = p2NameInput;
    
        p1Name.innerHTML = this.p1Name;
        p2Name.innerHTML = this.p2Name;

        if (pointInput == '') {
            pointInput = this.pointLimit;
        }
        if (roundInput == '') {
            roundInput = this.roundsLimit;
        }

        this.pointLimit = parseInt(pointInput);
        this.roundsLimit = parseInt(roundInput);
        
    }
}

function aiGenerate() {
    const computerWeapon = document.querySelector('.player2__weapon-value');
    const randomWeaponsId = weapons[Math.round(Math.random() * (weapons.length - 1))];

    computerWeapon.innerHTML = randomWeaponsId.name;
}

export default Game;