require('@std/esm');

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/Router.js',
  output: {
    filename: 'site.bundle.js',
    path: path.resolve(__dirname, 'public', 'js')
  },
  target: 'web',
  externals: {
    'apollo-client-browser': 'Apollo'
  },
  resolve: {
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat',
      'create-react-class': 'preact-compat/lib/create-react-class'
    }
  },
  node: {
    console: true,
    global: true,
    process: true,
    __filename: "mock",
    __dirname: "mock",
    Buffer: true,
    setImmediate: true,
    path: true,
    url: true
  },
  module: {
    loaders: [
      {
        test: /\.(txt|md)$/,
        loader: 'raw-loader'
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          "presets": [
            "es2015",
            "es2016",
            "es2017",
            "react",
            ["env", {
              "targets": { "node": "current" },
              "modules": "commonjs",
              "useBuiltIns": true,
              "debug": true
            }]
          ],
          "plugins": [
            "transform-async-to-generator",
            "transform-decorators-legacy",
            "transform-runtime",
            ["transform-react-jsx", { "pragma":"h" }]
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader', options: {sourceMap: true } },
          { loader: 'css-loader', options: {
            sourceMap: true,
            importLoaders: 1,
            modules: true
          }},
          { loader: 'postcss-loader', options: {
            plugins: (loader) => [
              require('autoprefixer')(),
              require('postcss-color-rebeccapurple')()
            ],
            sourceMap: 'inline'
          }},
          { loader: 'less-loader', options: {sourceMap: true } }
        ]
      }
    ]
  },

  plugins: [
    // new (require('webpack-bundle-analyzer').BundleAnalyzerPlugin)(),
    new ExtractTextPlugin({filename: 'styles.css', allChunks: true, ignoreOrder: true, disable: true}),
    new webpack.optimize.UglifyJsPlugin({ mangle: false })
  ]
};
