class Weapon {
    constructor(name, beat) {

        this.name = name;
        this.beat = beat;

    }

    createWeapon() {

        const weaponContainer = document.querySelector(".weapon-select > form");

        weaponContainer.innerHTML += `
        <input type="radio" name="weapon" id="${this.name}" value="${this.name}">
        <label for="${this.name}">${this.name}</label>
        `
    }

}

export default Weapon;