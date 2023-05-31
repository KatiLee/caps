'use strict';

const eventPool = require('./eventPool');
const vendor = require('./vendor');
const driver = require('./driver');

eventPool.on('event', (event, payload) => {
    const timeStamp = new Date().toISOString();
    console.log(`EVENT { event: '${event}', time: ${timestamp} payload: ${JSON.stringify(payload)}}`);
});

vendor.start();
driver.start();
