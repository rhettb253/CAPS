'use strict';

const events = require('../eventPool');

function pickupHandler(payload) {
  console.log('DRIVER: picked up order ' + payload.data.orderId);
  payload.event = 'in-transit';
  events.emit('in-transit', payload);
  console.log('DRIVER: delivered ' + payload.data.orderId);
  payload.event = 'delivered';
  events.emit('delivered', payload);
}

module.exports = {pickupHandler};
