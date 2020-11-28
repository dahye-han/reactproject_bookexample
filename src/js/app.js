const path = require('path');

module.exports = {
    entry: './src/js/app.js',
    // 추가된 내용
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    }
};