const path = require('path');
const fs = require('fs');
const lessToJS = require('less-vars-to-js');

module.exports.themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, './antd-custom.less'), 'utf8'));
