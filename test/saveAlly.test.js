import { getAlly, saveAlly } from '../data/saveAlly.js';

const test = QUnit.test;

QUnit.module('save ally profile');

QUnit.testStart(() => {
    window.localStorage.clear();
});

test('saveAlly sets ally and returns on getAlly', (assert) => {
    // arrange
    const ally = { 
        name: null,
        animal: 'raccoon',
        wp: 35,
        sc: 20
    };

    // act
    saveAlly(ally);
    const result = getAlly();

    // assert
    assert.deepEqual(result, ally);
});