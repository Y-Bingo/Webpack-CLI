/**
 * 公共环境配置
 */

const path = require( 'path' );
const HtmlWebpackPlugin = require( "html-webpack-plugin" );
const { CleanWebpackPlugin } = require( "clean-webpack-plugin" );

module.exports = {
    entry: "./src/index.js",
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin( {
            template: "./template/index.html"
        } )
    ]
}
