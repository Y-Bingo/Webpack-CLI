const path = require( 'path' );
const merge = require( 'webpack-merge' );

const comConfig = require( './webpack.com' );

const ROOT_PATH = process.cwd();

const prod = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    output: {
        publicPath: './',
        filename: '[name].bundle.js',
        path: path.resolve( ROOT_PATH, 'bin' )
    },
}

module.exports = merge( comConfig, prod );
