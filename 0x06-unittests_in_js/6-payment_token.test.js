const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('Returns success object when success == true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res).to.deep.equal({data: 'Successful response from the API'});
        done();
      });
  });
});
