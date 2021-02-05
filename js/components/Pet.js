class Pet {
    constructor(vardas, kailis) {
        this.name = vardas;
        this.furColor = kailis || 'brown';
        this.sound = 'Miau au 🐈🐕‍🦺';
        this.isStanding = false;
    }

    standUp() {
        this.isStanding = true;
    }

    sitDown() {
        this.isStanding = false;
    }

    speak() {
        console.log(`${this.name}: ${this.sound}!`);
    }

    introduce() {
        console.log(`Hi, my name is ${this.name}, my fur is ${this.furColor} and speak like this: ${this.sound}!`);
    }
}

export { Pet }