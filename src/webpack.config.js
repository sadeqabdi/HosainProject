
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var autoprefixer = require('autoprefixer');
const webpack = require('webpack');

// https://github.com/webpack/webpack/issues/2537
const NODE_ENV = (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'emergency') ? 'production' : 'development';
const IS_PRODUCTION = (NODE_ENV === 'production' || NODE_ENV === 'emergency');

//todo: console
console.log('NODE_ENV', NODE_ENV);

module.exports = {
  entry: './src/client.js',
  output: {
    path: path.join(__dirname, NODE_ENV === 'development' ? 'public_dev' :'public'),
    filename: 'bundle.js',
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),

    // https://webpack.js.org/guides/production-build/
    // http://moduscreate.com/optimizing-react-es6-webpack-production-build/
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    }),

    // if we are in production stage, then
    ...(!IS_PRODUCTION ?
      [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
          screw_ie8: true,

          // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
          warnings: true,
        },
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
      ] : []),

  ],

  target: 'web',

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }, {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader?limit=100000&name=/[hash].[ext]',
      }, {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
      }, {
        test: /\.json$/, loader: "json"
      }
    ],
  },

  postcss: [autoprefixer()],
  // Choose a developer tool to enhance debugging
  // http://webpack.github.io/docs/configuration.html#devtool
  devtool: IS_PRODUCTION
    ? 'cheap-module-source-map'
    : 'cheap-module-eval-source-map'

};

// todo : improve structure output file and styles in public direcotry
