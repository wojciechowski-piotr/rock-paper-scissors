import weapons from './weapons-list';

class Player {
    constructor(name, control) {
        this.name = name;
        this.control = control;
    }
    chooseWeapon(callback) {
        const radios = [...document.querySelectorAll('input[type=\'radio\']')];
        const selectedWeapon = document.querySelector('.player1__weapon-value');

        radios.forEach(el => {
            el.addEventListener('click', () => {
                selectedWeapon.innerHTML = el.value;

                function aiGenerate() {
                    const computerWeapon = document.querySelector('.player2__weapon-value');
                    const randomWeaponsId = weapons[Math.round(Math.random() * (weapons.length - 1))];

                    computerWeapon.innerHTML = randomWeaponsId.name;
                }

                aiGenerate();
                callback();
            });
        });

    }
}

export default Player;