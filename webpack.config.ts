import path from 'path';
import { Configuration, WebpackPluginInstance } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: Configuration & { devServer?: any } = {
  // Configuration for both development and production
  entry: './index.ts',
  output: {
    filename: 'bundle.[contenthash].js',
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
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/interface/interface.html',
      filename: './src/interface/interface.html',
      minify: true,
    }) as unknown as WebpackPluginInstance,
  ],

  // Development-specific configuration
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
};

export default (env: { production?: boolean }) => {
  if (env.production) {
    config.mode = 'production';
    config.devtool = 'source-map';
    config.output!.filename = 'bundle.[contenthash].js';
  } else {
    config.mode = 'development';
  }
  return config;
};