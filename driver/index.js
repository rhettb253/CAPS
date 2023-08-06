'use strict';

const events = require('../eventPool');
const pickupHandler = require('./handler');

events.on('pickup', pickupHandler);

