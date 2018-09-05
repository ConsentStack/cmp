const path = require('path');

// WEBPACK PLUGINS
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  entry: {
    cmp: ['babel-polyfill', './src/main.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: process.env.ASSET_PATH,
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      '@': path.resolve('src'),
    },
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
    },
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.css$/,
      use: [{
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      ],
    },
    {
      test: /\.scss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
        },
      ],
    },
    {
      test: /\.(html)$/,
      use: {
        loader: 'html-loader',
      },
    },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin('dist', {}),
    new HtmlWebpackPlugin({
      template: './build/template.index.html',
    }),
    new HtmlWebpackExcludeAssetsPlugin(),
    new BundleAnalyzerPlugin.BundleAnalyzerPlugin({
      analyzerMode: (isProduction) ? 'disabled' : 'server',
    }),
  ],
};

module.exports = config;
