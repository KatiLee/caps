'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/caps');
const { pickupOccurred, packageDelivered } = require('./handler');

jest.mock('socket.io-client', () => {
    const emit = jest.fn();
    return {
        io: jest.fn().mockReturnValue({
            emit,
        }),
    };
});

let consoleSpy;

beforeAll(() => {
    consoleSpy.mockRestore();
});

afterAll(() => {
    consoleSpy.mockRestore();
});

describe('Testing driver handlers', () => {
    test('should log and emit in-transit after pick up occurs', () => {
        let payload = { orderId: 12345 };
        pickupOccurred(payload);
        expect(socket.emit).toHaveBeenCalledWith('in-transit', payload);
        expect(consoleSpy).toHaveBeenCalledWith('DRIVER: picked up', payload.orderId);
    });

    test('should emit delivered and lg driver delivery', () => {
        let payload = { orderId: 12345 };
        packageDelivered(payload);
        expect(socket.emit).toHaveBeenCalledWith('delivered', payload);
        expect(consoleSpy).toHaveBeenCalledWith('DRIVER: delivered', payload.orderId);
    });
});