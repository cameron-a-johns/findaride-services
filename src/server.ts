// path magic...
process.env.NODE_PATH = './';
require('module').Module._initPaths();

import { FindARideServer } from './app/app';
// start server
const port = parseInt(process.env.PORT || '', 10) || 4000;
const server = new FindARideServer();
server.start(port);
