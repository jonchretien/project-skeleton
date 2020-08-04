module.exports = {
  plugins: [
    require('postcss-import')({
      path: ['css/index'],
    }),
    require('cssnano')({
      preset: 'default',
    }),
  ],
};
