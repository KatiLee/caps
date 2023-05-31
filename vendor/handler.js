'use strict';

const eventPool = require('../eventPool');
const Chance = require('chance');
const chance = new Chance();

eventPool.on('delivered', payload => {
    console.log(`VENDOR: Thanks for the delivering ${payload.orderID}`);
});

module.exports = {
    poolPickupEvent(store) {
        const payload = {
            store, 
            orderID: chance.guid(),
            customer: chance.name(),
            address: chance.city() + ', ' + chance.state(),
        };
        eventPool.emit('pickup', payload);
    },
    deliveredHandler(payload) {
        console.log(`VENDOR: Thanks for deliver ${payload.orderID}`);
    },
};