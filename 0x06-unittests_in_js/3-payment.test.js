const sinon = require('sinon');
const Utils = require('./utils');
const expect = require('chai').expect;
const sendPaymentRequestToAPI = require('./3-payment');

describe('Tests sendPaymentRequestToAPI function', () => {
    it('Returns a result using Utils.calculateNumber', () => {
	const spy = sinon.spy(Utils);
	sendPaymentRequestToAPI(100, 20);
	expect(spy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
	expect(spy.calculateNumber.callCount).to.be.equal(1);
	spy.calculateNumber.restore();
    });
});
