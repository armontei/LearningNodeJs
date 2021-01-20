const counter = require('./myModule');
// same as const { inc, dec, getCount } = require('./myModule'); --> destructuring
// inc()
// inc()
// inc()
// dec()

counter.inc()
counter.inc()
counter.inc()
counter.dec()

console.log(counter.getCount());