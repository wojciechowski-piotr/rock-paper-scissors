import Weapon from './create-weapon';

class Player {
    constructor(name, control) {
        this.name = name;
        this.control = control;
        this.weapon = null;
    }
}

export default Player;