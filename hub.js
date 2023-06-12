'use strict';

const eventPool = require('./eventPool');

require('./vendor/index');
require('./clients/driver/index');

eventPool.on('pickup', (payload) => logger('pickup', payload));
eventPool.on('in-transit', (payload) => logger('in-transit', payload));
eventPool.on('delivered', (payload) => logger('delivered', payload));

function logger(event, payload) {
    const timestamp = new Date();
    console.log('EVENT: ', { event, timestamp, payload });
}

