'use strict';

let eventPool = require('../eventPool');
const Chance = require('chance');

function pickUp(storeName) {
    const payload = orderPayload(storeName);
    eventPool.emit('pickup', payload);
    console.log('EVENT: ' {
        event: 'pickup',
        time: new Date().toISOString(),
        payload,
    });
}

function orderPayload(storeName) {
    const chance = new Chance();
    const orderID = chance.guid();
    const customer = chance.name();
    const address = chance.address();
    const timestamp = chance.timestamp();

    return {
        store: storeName,
        orderID,
        customer,
        address,
        timestamp, 
    };
}

function eventData(event) {
    if (event.event === 'pickup') {
        const { orderID, customer, address } = event.payload;
        return {
            orderID,
            customer,
            address,
            status: 'Bouquet has been picked up',
        };
    } else if (event.event === 'Delivery in progress') {
        const { orderID } = event.payload;
        return {
            orderID,
            status: 'Your arrangement has been delivered'
        };
    }
}

module.exports = {
    start: function () {
        const storeName = 
    }
}
