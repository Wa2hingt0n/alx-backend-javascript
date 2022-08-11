// Test cases for the calculateNumber function
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Tests the calculateNumber function', () => {
    it('Rounds a and b to integers', () => {
	assert.deepEqual(calculateNumber(3.0, 4.0), 7);
    });
    it('Rounds "a" down appropriately', () => {
	assert.deepEqual(calculateNumber(3.4, 4.0), 7);
    })
    it('Rounds "b" down appropriately', () => {
	assert.deepEqual(calculateNumber(3.0, 4.4), 7);
    })
    it('Rounds a and b down appropriately', () => {
	assert.deepEqual(calculateNumber(3.4, 4.4), 7);
    })
    it('Rounds a up appropriately', () => {
	assert.deepEqual(calculateNumber(3.7, 4.0), 8);
    })
    it('Rounds b up appropriately', () => {
	assert.deepEqual(calculateNumber(3.0, 4.7), 8);
    })
    it('Rounds a and b up appropriately', () => {
	assert.deepEqual(calculateNumber(3.7, 4.7), 9);
    })
    it('Rounds a down and b up appropriately', () => {
	assert.deepEqual(calculateNumber(3.4, 4.7), 8);
    })
    it('Rounds a up and b down appropriately', () => {
	assert.deepEqual(calculateNumber(3.7, 4.4), 8);
    })
});
