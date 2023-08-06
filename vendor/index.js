'use strict';

const events = require('../eventPool');
const Chance = require('chance');
const thankYou = require('./handler');

// Instantiate Chance so it can be used
const chance = new Chance();

let store = 'Code Academy Parcel Service';
let orderId = chance.string({ length: 8 });
let customer = chance.name();
let address = chance.address({ short_suffix: true });

events.on('delivered', thankYou);

events.emit('pickup', {
  event: 'pickup',
  data: {
    store,
    orderId,
    customer,
    address,
  },
});

