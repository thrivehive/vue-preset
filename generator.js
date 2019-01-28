module.exports = (api, opts) => {
  console.log({opts}});
  if (opts.useStorybook) {
    Object.assign(opts.plugins, {
      'vue-cli-plugin-storybook': {
        'version': 'latest'
      }
    })
  }
  if (opts.useVuetify) {
    Object.assign(opts.plugins, {
      'vue-cli-plugin-vuetify': {
        'version': 'latest',
        'preset': 'configure',
        'replaceComponents': true,
        'iconFont': 'md',
        'installFonts': false,
        'locale': 'en',
        'useAlaCarte': true,
        'useCustomProperties': false,
        'usePolyfill': false,
        'useTheme': false
      }
    })
  }
};
