import Weapon from './create-weapon';
import Player from './players';

const weapons = [new Weapon("rock", "scissors"),
                 new Weapon("scissors", "paper"),
                 new Weapon("paper", "rock")];

const players = [new Player("P1", "human"),
                 new Player("P2-AI", "computer")];

weapons.forEach(el => el.createWeapon());
players.forEach(el => el.chooseWeapon());

export default weapons;