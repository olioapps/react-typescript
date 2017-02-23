module.exports = {
  devtool: 'source-map',
  entry: {
    main: './src/app/main.tsx'
  },
  output: {
    path: __dirname + '/public',
    filename: 'build/[name].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  }
}