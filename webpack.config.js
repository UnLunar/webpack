var htmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var path = require('path');

module.exports={
    entry:'./src/js/index.js',
    output:{
        filename:'bundles.js',
        path:path.resolve('./dist')
    },
    module:{
        rules:[{
            test:/\.css$/,
            use:['style-loader','css-loader']
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: 'true'
        }),
        new CopyWebpackPlugin([{
            from: './src/images',
            to:'images'
        }])
    ]
}