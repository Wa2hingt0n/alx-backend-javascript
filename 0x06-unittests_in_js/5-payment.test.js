const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    if (!spy) {
      spy = sinon.spy(console);
    }
  });
  afterEach(() => {
    spy.log.resetHistory();
  });

  it('sendPaymentRequestToApi(100, 20) called once and logs correctly to console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.log.calledWith('The total is: 120')).to.be.true;
    expect(spy.log.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToApi(10, 10) called once and logs correctly to console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spy.log.calledWith('The total is: 20')).to.be.true;
    expect(spy.log.calledOnce).to.be.true;
  });
});
