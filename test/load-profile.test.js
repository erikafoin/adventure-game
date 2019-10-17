import makeAlly from '/home/makeAlly.js';
const test = QUnit.test;

QUnit.module('make ally character');

test('create ally object from form data', (assert) => {
    // arrange
    const formData = new FormData();
    formData.set('animal', 'raccoon');

    const expected = {
        animal: 'raccoon',
        hp: 35,
        gold: 0,
        completed: {}
    };

    // act
    const ally = makeAlly(formData);

    // assert
    assert.deepEqual(ally, expected);
});