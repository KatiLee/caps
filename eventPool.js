'use strict';

const Event = require('event');
const eventPool = new EventPool();

module.exports = eventPool;