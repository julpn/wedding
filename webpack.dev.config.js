var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
    './src/index.js' // Your appʼs entry point
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/',
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader']
      }, {
        test: /\.css/,
        loaders: ['style-loader', 'css-loader'],
        include: __dirname + '/src'
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['file-loader?context=src/images&name=images/[path][name].[ext]', {
          loader: 'image-webpack-loader',
          query: {
            mozjpeg: {
              progressive: true,
            },
            gifsicle: {
              interlaced: false,
            },
            optipng: {
              optimizationLevel: 4,
            },
            pngquant: {
              quality: '75-90',
              speed: 3,
            },
          },
        }],
        exclude: /node_modules/,
        include: __dirname,
      }, {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
    ]
  }
};
