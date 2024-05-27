// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: {
    main: './src/index.js',
    r: './src/r.js'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  optimization: {
    splitChunks: {
      chunks: 'initial',
      minChunks: 1,
      minSize: 1,
      cacheGroups: {
        log: {
          test: /[\\/]src[\\/]log.js/,
          name: 'log'
        },
        log2: {
          test: /[\\/]src[\\/]log2.js/,
          name: 'log2'
        },
        r1: {
          test: /[\\/]src[\\/]r1.js/,
          name: 'r1'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";

    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  } else {
    config.mode = "development";
  }
  return config;
};
