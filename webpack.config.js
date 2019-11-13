const path = require( 'path' );
const HtmlWebpackPlugin = require( "html-webpack-plugin" );
const { CleanWebpackPlugin } = require( "clean-webpack-plugin" );

module.exports = {
    mode: "development",
    devtool: "cheap-module-source-map",
    entry: {
        main: "./src/index.js",
        sub: "./src/index.js"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin( {
            template: path.resolve( __dirname, "template/index.html" )
        } ),
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve( __dirname, "bin" )
    },
}