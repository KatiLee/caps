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

const handlePickupAndDelivery = (payload) => {
    setTimeout(() => {
        pickupOccurred(payload);
    }, 1000);
    setTimeout(() => {
        packageDelivered(payload);
    }, 2000);
};

module.exports = { pickupOccurred, packageDelivered, handlePickupAndDelivery };