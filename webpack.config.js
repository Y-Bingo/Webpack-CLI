const path = require( 'path' );
const HtmlWebpackPlugin = require( "html-webpack-plugin" );
const { CleanWebpackPlugin } = require( "clean-webpack-plugin" );
const webpack = require( "webpack" );

module.exports = {
    mode: "development",
    devtool: "cheap-module-source-map",
    entry: {
        main: "./src/index.js"
    },
    devServer: {
        contentBase: "./bin",
        open: true,
        port: 9334
        hot: true,
        hotOnly: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin( {
            template: path.resolve( __dirname, "template/index.html" )
        } ),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve( __dirname, "bin" )
    },
}