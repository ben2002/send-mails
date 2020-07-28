const path = require('path');

// deprecated
//module.exports = path.dirname(process.mainModule.filename);

module.exports = require.main.path;
