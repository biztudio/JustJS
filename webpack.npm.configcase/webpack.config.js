var path = require('path')

module.exports = {
    devtool: 'source-map',
    
    entry: {
        app:'./index.js'
    },

    output: {
        filename: '[name].bundle.js',
        //对应一个绝对路径，此路径是你希望一次性打包的目录
        path: path.resolve(__dirname, 'dist')
    }
};