var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    
    entry:{
        app:'./js/entry.js',
        vendor:['lodash']
    },

    output:{
        //[chunkHash:5]变量，表示打包后的文件中加入保留5位的hash值
        filename:'[name].bundle.[chunkHash:5].js',
         //对应一个绝对路径，此路径是你希望一次性打包的目录
        path: path.resolve(__dirname, 'dist')
    },

    plugins:[
        //CommonsChunkPlugin插件用于提取公共代码
        new webpack.optimize.CommonsChunkPlugin(
            {name:['vendor', 'manifest']}
        ),
        
        //webpack2.0版本中UglifyJsPlugin的compress选项默认为false，并且OccurrenceOrderPlugin默认启用，所以无需进行配置

        // 去除代码块内的告警语句
        /*
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        }),
        */
        
        //该插件可以帮助我们根据模板生成html文件。在plugins设置中，title配置了生成html中的title部分，template为模板html的路径地址
        new HtmlWebpackPlugin({
            title:'Web Demo',
            template:'index.html'
        })
    ]
};