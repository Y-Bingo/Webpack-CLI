/**
 * 开发环境配置
 */
const webpack = require( 'webpack' );
const merge = require( 'webpack-merge' );

const comConfig = require( './wp.com' );

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
        usedExports: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = merge( comConfig, dev );
