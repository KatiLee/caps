'use strict';

const { orderHandler, deliveredMessage } = require('./handler');

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/caps');

socket.on('delivered', deliveredMessage);

let store = '1-206-flowers';
socket.emit('JOIN', store);

setInterval(() => {
    orderHandler();
}, 5000);