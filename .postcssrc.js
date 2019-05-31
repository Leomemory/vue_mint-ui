module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-px-to-viewport": {
      viewportWidth: 375,
	  viewportHeight: 667,
	  unitPrecision: 5,
	  viewportUnit: 'vw',
	  selectorBlackList: ['.ignore', '.hairlines'],
	  minPixelValue: 1,
	  mediaQuery: false,
	  exclude: /(\/|\\)(node_modules)(\/|\\)/
    },
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}
  }
}
