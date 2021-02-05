class Dog {
    constructor(vardas, kailis) {
        this.name = vardas;
        this.furColor = kailis || 'brown';
        this.sound = 'Au au 🐕‍🦺🐕‍🦺';
        this.isStanding = false;
        this.distance = 0;
    }

    speak() {
        console.log(`${this.name}: ${this.sound}!`);
    }

    introduce() {
        console.log(`Hi, my name is ${this.name}, my fur is ${this.furColor} and speak like this: ${this.sound}!`);
    }

    standUp() {
        this.isStanding = true;
    }

    sitDown() {
        this.isStanding = false;
    }

    walk(distance) {
        if (!this.isStanding) {
            console.log(`${this.name} can not walk... dog needs to stand up!`);
            return false;
        }
        this.distance += distance;
    }
}

export { Dog }