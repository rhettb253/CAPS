'use strict';

const events = require('./eventPool');

//logIt on all event occurrences
events.on('pickup', logIt);
events.on('in-transit', logIt);
events.on('delivered', logIt);

//listen to all events
require('./driver');
require('./vendor');

function logIt(payload) {
  console.log('Event:', payload.event);
  console.log('Current time:', getCurrentTime());
  console.log('Payload: ', payload.data);
}

function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const currentTime = `${hours}:${minutes}:${seconds}`;
  return currentTime;
}
