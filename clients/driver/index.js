'use strict';

const { io } = require('socket.io-client');
const socket = io.connect('http://localhost:3001/caps');

socket.emit('getAll', { queue: 'DRIVER' });

socket.on('pickup', (payload) => {
    setTimeout(() => {
        console.log(`DRIVER: Picked up ${payload.orderId}`);
        socket.emit('recieved', { queueId: 'DRIVER' });
        socket.emit('in-transit', payload);
    }, 1000);
});

socket.on('in-transit', (payload) => {
    setTimeout(() => {
        socket.emit('delivered', payload);
    }, 1000);
});

socket.on('Delivered', (payload) => {
    console.log(`DRIVER: delivered ${payload.orderId}`);
});

