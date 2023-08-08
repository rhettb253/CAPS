'use strict';

const events = require('../eventPool');
// require('../driver');
const { pickupHandler } = require('../driver/handler');
const thankYou = require('../vendor/handler');
const payload = {
  data: {
    store: 'CAPS',
    orderId: '1234',
    customer: 'rhett',
    address: '1234 main st',
  },
};

describe('Are the events calling the functions', () => {
  it('should call our pickupHandler function', () => {
    const spy = jest.spyOn(console, 'log');
    // events.emit('pickup', payload);
    pickupHandler(payload);
    expect(spy).toHaveBeenCalled();
  });
});
