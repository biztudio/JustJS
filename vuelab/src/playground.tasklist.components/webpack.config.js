var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool:'source-map',

    entry:{
        app:'main.js',
        vendor:['Vue']
    },
    
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'[name].bundle.[chunkHash:5].js'
    },

    plugins:[
         //分离资源，实现缓存资源和并行加载资源
        //CommonsChunkPlugin插件用于提取公共代码
        new webpack.optimize.CommonsChunkPlugin( {name:['vendor', 'manifest']} )
    ]
};