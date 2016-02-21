var uuid = require('../index.js');


for (var i=0; i<10; ++i) {
  console.log('v1', uuid.v1());
  console.log('v4', uuid.v4(), "\n");
}