const path = require('path');
const util = require('util'); 
// same as const { log } = require('util');
const v8 = require('v8');
// same as { getHeapStatistics } = require('v8);

const dirUploads = path.join(__dirname, 'www', 'files', 'uploads');
util.log( path.basename(__filename) );

console.log(dirUploads);
util.log(' ^ The name of the current file ');
util.log(v8.getHeapStatistics());


