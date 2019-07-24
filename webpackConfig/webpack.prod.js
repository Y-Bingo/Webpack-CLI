const path = require( 'path' );
const merge = require( 'webpack-merge' );

const comConfig = require( './webpack.com' );

const prod = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
}

module.exports = merge( comConfig, prod );
