// Test cases for the calculateNumber function
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Tests the calculateNumber function', () => {
    describe('When type == "SUM"', () => {
	it('Rounds a and b to integers and returns sum', () => {
	    assert.deepEqual(calculateNumber('SUM', 3.0, 4.0), 7);
	});
	it('Rounds a down and b up returns sum', () => {
	    assert.deepEqual(calculateNumber('SUM', 3.4, 4.7), 8);
	});
	it('Rounds a up and b down and returns sum', () => {
	    assert.deepEqual(calculateNumber('SUM', 3.7, 4.3), 8);
	});
	it('Rounds a and b down and returns sum', () => {
	    assert.deepEqual(calculateNumber('SUM', 3.4, 4.4), 7);
	});
	it('Rounds a and b up and returns sum', () => {
	    assert.deepEqual(calculateNumber('SUM', 3.7, 4.7), 9);
	});
	it('Rounds negative a up and b down and returns sum', () => {
	    assert.deepEqual(calculateNumber('SUM', -3.4, 4.3), 1);
	});
	it('Rounds a and negative b and returns sum', () => {
	    assert.deepEqual(calculateNumber('SUM', 3.7, -4.3), 0);
	});
    });

    describe('When type == "SUBTRACT"', () => {
	it('Rounds a and b to integers and returns difference', () => {
	    assert.deepEqual(calculateNumber('SUBTRACT', 4.0, 3.0), 1);
	});
	it('Rounds a down and b up returns difference', () => {
	    assert.deepEqual(calculateNumber('SUBTRACT', 6.4, 4.7), 1);
	});
	it('Rounds a up and b down and returns difference', () => {
	    assert.deepEqual(calculateNumber('SUBTRACT', 5.7, 4.3), 2);
	});
	it('Rounds a and b down and returns difference', () => {
	    assert.deepEqual(calculateNumber('SUBTRACT', 5.4, 4.4), 1);
	});
	it('Rounds a and b up and returns difference', () => {
	    assert.deepEqual(calculateNumber('SUBTRACT', 5.7, 4.7), 1);
	});
	it('Rounds negative a up and b down and returns difference', () => {
	    assert.deepEqual(calculateNumber('SUBTRACT', -3.4, 4.3), -7);
	});
	it('Rounds a and negative b and returns difference', () => {
	    assert.deepEqual(calculateNumber('SUBTRACT', 3.7, -4.3), 8);
	});
    });

    describe('When type == "DIVIDE"', () => {
	it('Rounds a and b to integers and returns quotient', () => {
	    assert.deepEqual(calculateNumber('DIVIDE', 4.0, 4.0), 1);
	});
	it('Rounds a down and b up returns quotient', () => {
	    assert.deepEqual(calculateNumber('DIVIDE', 6.4, 4.7), 1.2);
	});
	it('Rounds a up and b down and returns quotient', () => {
	    assert.deepEqual(calculateNumber('DIVIDE', 5.7, 4.3), 1.5);
	});
	it('Rounds a and b down and returns quotient', () => {
	    assert.deepEqual(calculateNumber('DIVIDE', 5.4, 4.4), 1.25);
	});
	it('Rounds a and b up and returns quotient', () => {
	    assert.deepEqual(calculateNumber('DIVIDE', 5.7, 4.7), 1.2);
	});
	it('Rounds negative a up and b down and returns quotient', () => {
	    assert.deepEqual(calculateNumber('DIVIDE', -3.4, 4.3), -0.75);
	});
	it('Rounds a and negative b and returns quotient', () => {
	    assert.deepEqual(calculateNumber('DIVIDE', 3.7, -4.3), -1);
	});
	it('Rounds a and "b to zero" and returns quotient', () => {
	    assert.deepEqual(calculateNumber('DIVIDE', 3.7, 0.3), 'Error');
	});
    });
});
