'use strict';

require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002

const server = new Server();
const caps = server.of('/caps');

function logger(event, payload){
    const timestamp = new Date();
    console.log('EVENT: ',  { event, timestamp, payload });
}

server.on('connection', (socket) => {
    console.log('Server socket connection to event event server: ', socket.id);
});

caps.on('connection', (socket) => {
    console.log('Caps socket connection to server: ', socket.id);

    socket.on('JOIN', (room) => {
        console.log('Possible rooms ----------', socket.adapter.rooms);
        console.log('Payload is in this room ---------', room);
        socket.join(room);
    });

    socket.on('pickup', (payload) => {
        logger('pickup', payload);
        caps.emit('pickup', payload);
    });

    socket.on('delivered', (payload) => {
        logger('delivered', payload);
        caps.emit('delivered', payload);
    });
});

server.listen(PORT);