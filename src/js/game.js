import weapons from './weapons-list';
import players from './players-list';

class Game {
    constructor(pointLimit, rounds) {

        this.pointLimit = pointLimit;
        this.rounds = rounds;
        this.p1score = 0;
        this.p2score = 0;
    }
    startGame() {

        weapons.forEach(el => el.createWeapon());
        players[0].chooseWeapon(compareWeapons);
        
        function compareWeapons() {
            
            const p1Weapon = document.querySelector('.player1__weapon-value').textContent;
            const p2Weapon = document.querySelector('.player2__weapon-value').textContent;

            const p1WeaponId = weapons.findIndex(el => el.name === p1Weapon);
            const p2WeaponId = weapons.findIndex(el => el.name === p2Weapon);

            
            if (p1Weapon === weapons[p2WeaponId].beat) {
                console.log('P2 win');
            } else if (p2Weapon === weapons[p1WeaponId].beat) {
                console.log('P1 win');
            } else if (p1Weapon === p2Weapon) {
                console.log('Draw');
            }
        }
    }
}

export default Game;