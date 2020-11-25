/**
 * @file webpack/config.js
 * @author SubwaySamurai
 * @date 2020/11/18
 * @description WEBPACK 配置文件
 */
var path = require('path');
module.exports = {
    entry: [
        path.join(__dirname, './src/index.js')
    ],
    plugins: [

    ],
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /(\.js)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [],
                            plugins: []
                        }
                    }
                ]
            }
        ]
    },
    externals: {

    },
    devtool: ''
};