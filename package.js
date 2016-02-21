Package.describe({
  name: 'astrocoders:react-img',
  version: '1.1.4',
  summary: 'https://github.com/Astrocoders/react-image-smooth-loading/',
  git: 'https://github.com/Astrocoders/meteor-astrocoders-publish',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use([
    'ecmascript',
    'mongo',
    'underscore',
  ]);

  api.addFiles([
    'dist/browser.js',
  ]);

  api.addAssets([
    'dist/styles.css',
  ], 'server');

  api.export('ReactImg');
});
