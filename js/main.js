import { Dog } from './components/Dog.js';

const rexas = new Dog('Rexas', 'brown');
const rikis = new Dog('Rikis', 'white');

console.log(rexas);

rexas.walk(20);
rexas.walk(20);
rexas.walk(20);

rexas.standUp();
console.log(rexas);

rexas.walk(20);
rexas.walk(20);
rexas.walk(20);
console.log(rexas);

rexas.sitDown();
console.log(rexas);

rexas.walk(20);
