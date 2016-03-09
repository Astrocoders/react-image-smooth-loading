Package.describe({
  name: 'astrocoders:react-img',
  version: '0.0.3',
  summary: 'https://github.com/Astrocoders/react-image-smooth-loading/',
  git: 'https://github.com/Astrocoders/meteor-astrocoders-publish',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use([
    'ecmascript',
    'underscore',
    'react@0.14.1_1',
  ]);

  api.addFiles([
    'dist/browser.js',
  ], 'client');

  api.addAssets([
    'dist/styles.css',
  ], 'client');

  api.export('ReactImg', 'client');
});
