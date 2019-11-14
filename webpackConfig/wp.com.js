/**
 * 公共环境配置
 */

const path = require( 'path' );
const HtmlWebpackPlugin = require( "html-webpack-plugin" );
const { CleanWebpackPlugin } = require( "clean-webpack-plugin" );

const ROOT_PATH = process.cwd();

module.exports = {
    entry: "./src/index.ts",
    resolve: {
        extensions: [ '.ts', '.json' ]
    },
    module: {
        rules: [
            { test: /\.ts$/, include: path.resolve( ROOT_PATH, './src' ), loader: 'ts-loader' }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin( {
            template: "./template/index.html"
        } )
    ]
}
