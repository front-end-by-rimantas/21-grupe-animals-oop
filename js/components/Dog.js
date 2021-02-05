import { Pet } from './Pet.js';

class Dog extends Pet {
    constructor(vardas, kailis) {
        super(vardas, kailis);
        this.sound = 'Au au 🐕‍🦺🐕‍🦺';
    }
}

export { Dog }