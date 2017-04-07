var path = require('path')

module.exports = {
    devtool: 'source-map',
    
    entry: {
        app:'./index.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};