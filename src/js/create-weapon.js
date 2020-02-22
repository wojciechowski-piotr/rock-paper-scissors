class Weapon {
    constructor(name, beat) {
        this.name = name;
        this.beat = beat;
    }
}

Weapon.prototype.createWeapon = function() {
    const weaponContainer = document.querySelector('.weapon-select > form');

    const input = document.createElement('input');
    const label = document.createElement('label');

    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'weapon');
    input.setAttribute('id', this.name);
    input.setAttribute('value', this.name);
    label.setAttribute('for', this.name);
    label.textContent = this.name;

    weaponContainer.appendChild(input);
    weaponContainer.appendChild(label);

};

export default Weapon;