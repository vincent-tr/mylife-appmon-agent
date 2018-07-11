'use strict';

const { service } = require('mylife-appmon');
const config = require('../conf/config');

const debug = require('debug')('mylife:appmon:agent');

let agent;

function start() {
  debug('Starting agent');
  agent = service.setupAgent(config);
}

function stop() {
  try {
    agent.close();
    agent = null;
  } catch(err) {
    console.error('Error closing agent', err); // eslint-disable-line no-console
  }

  process.exit();
}

process.on('SIGINT', stop);
process.on('SIGTERM', stop);

start();
