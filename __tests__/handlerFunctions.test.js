'use strict';

const events = require('../eventPool');
require('../driver');
const pickupHandler = require('../driver/handler');
const thankYou = require('../vendor/handler');
const payload = {
  store: 'CAPS',
  orderId: '1234',
  customer: 'rhett',
  address: '1234 main st'
};

// describe('Are the events calling the functions', () => {
//   it('should call our pickupHandler function', () => {
//     const spy = jest.spyOn(pickupHandler, 'pickupHandler');
//     events.emit('pickup', payload);
//     expect(spy).toHaveBeenCalled();
//   });
// });
