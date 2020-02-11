import weapons from './index';

class Player {
    constructor(name, control) {
        this.name = name;
        this.control = control;
        this.weapon = null;
    }
    chooseWeapon() {
        const radios = [...document.querySelectorAll("input[type='radio']")];

        if (this.control === "human") {
            const selectedWeapon = document.querySelector(".player1__weapon-value");

            radios.forEach(el => {
                el.addEventListener("click", () => {
                    selectedWeapon.innerHTML = el.value;
                    this.weapon = el.value;
                })
            })
        } else if (this.control === "computer") {
            const compWeapon = document.querySelector(".player2__weapon-value");
            radios.forEach(el => {
                el.addEventListener("click", () => {

                    let compWeaponId = weapons[Math.round(Math.random() * (weapons.length - 1))];

                    compWeapon.innerHTML = compWeaponId.name;
                    this.weapon = compWeaponId.name;
                })
            })
        }
    }
}

export default Player;