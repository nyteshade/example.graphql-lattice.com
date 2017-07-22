const ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path');

module.exports = {
  entry: './src/Router.js',
  output: {
    filename: 'site.bundle.js',
    path: path.resolve(__dirname, 'public', 'js')
  },
  target: 'web',
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-dom-router': 'ReactRouterDOM'
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
          presets: [
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
    new ExtractTextPlugin({filename: 'styles.css', allChunks: true, ignoreOrder: true, disable: true})
  ]
};
