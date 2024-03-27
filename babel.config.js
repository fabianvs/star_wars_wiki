module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          views: './src/views',
          store: './src/store',
          assets: './src/assets',
          components: './src/components',
          globals: './src/globals',
        },
      },
    ],
  ],
};
