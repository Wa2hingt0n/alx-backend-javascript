// Test cases for the calculateNumber function
const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('Tests the calculateNumber function', () => {
    describe('When type == "SUM"', () => {
	it('Rounds a and b to integers and returns sum', () => {
	    expect(calculateNumber('SUM', 3.0, 4.0)).to.deep.equal(7);
	});
	it('Rounds a down and b up returns sum', () => {
	    expect(calculateNumber('SUM', 3.4, 4.7)).to.deep.equal(8);
	});
	it('Rounds a up and b down and returns sum', () => {
	    expect(calculateNumber('SUM', 3.7, 4.3)).to.deep.equal(8);
	});
	it('Rounds a and b down and returns sum', () => {
	    expect(calculateNumber('SUM', 3.4, 4.4)).to.deep.equal(7);
	});
	it('Rounds a and b up and returns sum', () => {
	    expect(calculateNumber('SUM', 3.7, 4.7)).to.deep.equal(9);
	});
	it('Rounds negative a up and b down and returns sum', () => {
	    expect(calculateNumber('SUM', -3.4, 4.3)).to.deep.equal(1);
	});
	it('Rounds a and negative b and returns sum', () => {
	    expect(calculateNumber('SUM', 3.7, -4.3)).to.deep.equal(0);
	});
    });

    describe('When type == "SUBTRACT"', () => {
	it('Rounds a and b to integers and returns difference', () => {
	    expect(calculateNumber('SUBTRACT', 4.0, 3.0)).to.deep.equal(1);
	});
	it('Rounds a down and b up returns difference', () => {
	    expect(calculateNumber('SUBTRACT', 6.4, 4.7)).to.deep.equal(1);
	});
	it('Rounds a up and b down and returns difference', () => {
	    expect(calculateNumber('SUBTRACT', 5.7, 4.3)).to.deep.equal(2);
	});
	it('Rounds a and b down and returns difference', () => {
	    expect(calculateNumber('SUBTRACT', 5.4, 4.4)).to.deep.equal(1);
	});
	it('Rounds a and b up and returns difference', () => {
	    expect(calculateNumber('SUBTRACT', 5.7, 4.7)).to.deep.equal(1);
	});
	it('Rounds negative a up and b down and returns difference', () => {
	    expect(calculateNumber('SUBTRACT', -3.4, 4.3)).to.deep.equal(-7);
	});
	it('Rounds a and negative b and returns difference', () => {
	    expect(calculateNumber('SUBTRACT', 3.7, -4.3)).to.deep.equal(8);
	});
    });

    describe('When type == "DIVIDE"', () => {
	it('Rounds a and b to integers and returns quotient', () => {
	    expect(calculateNumber('DIVIDE', 4.0, 4.0)).to.deep.equal(1);
	});
	it('Rounds a down and b up returns quotient', () => {
	    expect(calculateNumber('DIVIDE', 6.4, 4.7)).to.deep.equal(1.2);
	});
	it('Rounds a up and b down and returns quotient', () => {
	    expect(calculateNumber('DIVIDE', 5.7, 4.3)).to.deep.equal(1.5);
	});
	it('Rounds a and b down and returns quotient', () => {
	    expect(calculateNumber('DIVIDE', 5.4, 4.4)).to.deep.equal(1.25);
	});
	it('Rounds a and b up and returns quotient', () => {
	    expect(calculateNumber('DIVIDE', 5.7, 4.7)).to.deep.equal(1.2);
	});
	it('Rounds negative a up and b down and returns quotient', () => {
	    expect(calculateNumber('DIVIDE', -3.4, 4.3)).to.deep.equal(-0.75);
	});
	it('Rounds a and negative b and returns quotient', () => {
	    expect(calculateNumber('DIVIDE', 3.7, -4.3)).to.deep.equal(-1);
	});
	it('Rounds a and "b to zero" and returns quotient', () => {
	    expect(calculateNumber('DIVIDE', 3.7, 0.3)).to.deep.equal('Error');
	});
    });
});
