module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.js', '.json', '.ts', '.ios.tsx', '.android.tsx', '.tsx'],
        root: ['.'],
        alias: {
          '@': './src',
        },
      },
    ],
  ],
}
