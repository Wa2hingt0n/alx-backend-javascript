const sinon = require('sinon');
const Utils = require('./utils');
const expect = require('chai').expect;
const sendPaymentRequestToAPI = require('./4-payment');

describe('Tests sendPaymentRequestToAPI function', () => {
    it('Returns a result using Utils.calculateNumber', () => {
	const spy = sinon.spy(console);
	const dummy = sinon.stub(Utils, 'calculateNumber');
	dummy.returns(10);
	sendPaymentRequestToAPI(100, 20);
	expect(dummy.calledWith('SUM', 100, 20)).to.be.true;
	expect(dummy.callCount).to.be.equal(1);
	expect(spy.log.calledWith('The total is: 10')).to.be.true;
	expect(spy.log.callCount).to.be.equal(1);
	dummy.restore()
	spy.log.restore();
    });
});
