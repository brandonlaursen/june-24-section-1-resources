

import Game, {sayHello} from './game.js';
// import * as test from './game.js';

console.log(test);


window.onload = () => {
    console.log('hello')

    const game = new Game();
    game.start();
};
