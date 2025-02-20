import path from 'path';
import webpack from 'webpack';
import { Configuration, WebpackPluginInstance } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: Configuration & { devServer?: any } = {
  // Configuration for both development and production
  mode: 'development',
  entry: './index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    extensionAlias: {
      '.js': ['.js', '.ts'],
    },
  },
  module: {
    rules: [
      // Process ts files
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // Optionally process css if importing it in the ts files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    // Generates a proper index.html in the dist folder using the template
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'interface', 'interface.html'),
      filename: 'index.html',
      // minify: true,
    }) as unknown as WebpackPluginInstance,
  ],

  // Development-specific configuration
  // devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
};

export default config;
