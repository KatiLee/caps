'use strict';

var Chance = require('chance');
var chance = new Chance();

const createOrder = (socket, payload = null) => {
    if(!payload){
        payload = {
            store: '1-319-flowers',
            orderId: chance.guid(),
            customer: chance.name(),
            address: chance.address(),
        };
        
    }
}