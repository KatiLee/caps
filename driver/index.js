'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/caps');
const { handlePickupAndDelivered } = require('./handler');

socket.on('pickup', handlePickupAndDelivered);

let store = '1-206-flowers';
socket.emit('JOIN', store);