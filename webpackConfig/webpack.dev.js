const webpack = require( 'webpack' );
const merge = require( 'webpack-merge' );

const comConfig = require( './webpack.com' );

const dev = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: './bin',
        open: true,
        port: 9645,
        hot: true
    },
    optimization: {
        usedExports: true           // 是否打包引用的模块
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = merge( comConfig, dev );