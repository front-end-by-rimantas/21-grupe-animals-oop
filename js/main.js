import { Dog } from './components/Dog.js';
import { Cat } from './components/Cat.js';

const rexas = new Dog('Rexas', 'brown');
const rainis = new Cat('Rainis', 'white');

console.log(rainis.isStanding);

rainis.standUp();
console.log(rainis.isStanding);