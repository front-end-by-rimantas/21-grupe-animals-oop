import { Pet } from './Pet.js';

class Cat extends Pet {
    constructor(vardas, kailis) {
        super(vardas, kailis);
        this.sound = 'Miau miau 🐈🐈';
    }
}

export { Cat }