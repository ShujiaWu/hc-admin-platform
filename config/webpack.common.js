/**
 * Webpack配置公共部分
 * Created by Yun on 2017/2/6.
 */
var webpack = require('webpack');
var helpers = require('./helpers');
var path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',  //在大多数现代浏览器中运行Angular程序时需要的标准填充物
        'vendor': './src/vendor.ts',    //提供商文件
        'app': './src/main.ts'  //程序入口
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        loaders: [
            {
                test: /pnotify\.js/,
                loader: 'imports-loader?global=>window,this=>window'
            },
            // awesome-typescript-loader
            // 一个用于把TypeScript代码转译成ES5的加载器，它会由tsconfig.json文件提供指导
            // angular2-template-loader
            // 用于加载Angular组件的模板和样式
            // angular2-router-loader lazy-load
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader',
                    'angular2-template-loader',
                    'angular2-router-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                // 匹配应用级样式
                // 排除了/src/app目录下的.css文件，因为那里放着我们的组件局部样式。
                // 它只包含了那些位于/src及其上级目录的.css文件，那里是应用级样式。
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader'] })
            },
            {
                test: /\.css$/,
                // 匹配组件局部样式(就是在组件元数据的styleUrls属性中指定的那些)
                // 并通过raw加载器把它们加载成字符串
                // 那是Angular期望通过元数据的styleUrls属性来指定样式的形式
                include: helpers.root('src', 'app'),
                // loader: 'raw-loader',
                // loaders: ['to-string-loader','style-loader','css-loader']
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader'] })
            },
            {
                // 图片加载器，更适合图片，可以将较小的图片转成base64，减少http请求
                // 如下配置，将小于8192byte的图片转成base64码
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'url-loader?limit=8192&name=images/[name].[hash].[ext]'
            },
            {
                // 字体处理
                test: /\.(woff|woff2|eot|ttf)\??.*$/,
                loader: 'url-loader?name=fonts/[name].[hash].[ext]'
            },
            // {
            //     test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            //     loader: 'file?name=assets/[name].[hash].[ext]'
            // },
        ]
    },

    plugins: [
        /**
         * Plugin: ContextReplacementPlugin
         * Description: Provides context to Angular's use of System.import
         *
         * See: https://webpack.github.io/docs/list-of-plugins.html#contextreplacementplugin
         * See: https://github.com/angular/angular/issues/11580
         */
        new ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            // Helper functions
            path.resolve(__dirname, '..', 'src')
        ),

        new LoaderOptionsPlugin({}),

        // 生成一个文件，用来对照编译前后的文件位置，以免加md5后看不出来
        new AssetsPlugin({
            path: helpers.root('dist'),
            filename: 'webpack-assets.json',
            prettyPrint: true
        }),

        // CommonsChunkPlugin自动把提供商代码排除在app.js包之外
        // app -> vendor -> polyfills
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills'],
            minChunks: Infinity
        }),

        // 通过HtmlWebpackPlugin自动为我们注入那些script和link标签
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunksSortMode: 'dependency'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            Tether: 'tether',
            PNotify: 'pnotify'
        }),
        // 复制指定文件
        // new CopyWebpackPlugin([{
        //     from:'src/images',
        //     to:'images/'
        // }])
    ],
    /**
     * Include polyfills or mocks for various node stuff
     * Description: Node configuration
     *
     * See: https://webpack.github.io/docs/configuration.html#node
     */
    node: {
        global: true,
        crypto: 'empty',
        __dirname: true,
        __filename: true,
        process: true,
        Buffer: false,
        clearImmediate: false,
        setImmediate: false
    }
};
