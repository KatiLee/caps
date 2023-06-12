'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/caps');

const pickupOccurred = (payload) => {
    console.log('driver: picked up', payload.orderId);
    socket.emit('in-transit', payload);
};

const packageDelivered = (payload) => {
    console.log('DEVLIVER: delivered', payload.orderId);
    socket.emit('delivered', payload);
};

module.exports = { pickupOccurred, packageDelivered };