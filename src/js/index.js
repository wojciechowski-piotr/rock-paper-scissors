import Weapon from './create-weapon';

const weapons = [new Weapon("rock", "scissors"),
                 new Weapon("scissors", "paper"),
                 new Weapon("paper", "rock")];

weapons.forEach(el => el.createWeapon());