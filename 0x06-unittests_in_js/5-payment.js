const Utils = require('./utils');

const sendPaymentRequestToAPI = (totalAmount, totalShipping) => {
    const total = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${total}`);
};

module.exports = sendPaymentRequestToAPI;
