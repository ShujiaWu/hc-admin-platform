/**
 * Created by Yun on 2017/2/6.
 */
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        // 把输出包放到dist目录
        path: helpers.root('dist'),
        //HtmlWebpackPlugin 插件使用了publicPath和filename设置，来向index.html中插入适当的<script>和<link>标签。
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        // ExtractTextPlugin会把JS中的样式提取成外部.css文件
        new ExtractTextPlugin('[name].css')
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        host: '0.0.0.0',
        port: 8080,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
        proxy: {
            '/api/*': {
                target: 'http://localhost:3000',
                secure: false
            }
        }
    }
});
