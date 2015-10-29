Package.describe({
  summary: 'Style with attitude. Sass and SCSS support for Meteor.js (with autoprefixer and sourcemaps).',
  version: "3.4.0-beta1",
  git: "https://github.com/fourseven/meteor-scss.git",
  name: "fourseven:scss"
});

Package.registerBuildPlugin({
  name: "compileScssBatch",
  use: ['caching-compiler@1.0.0', 'ecmascript@0.1.5', 'underscore@1.0.4'],
  sources: [
    'shared/sum.js',
    'shared/scope.js',
    'plugin/compile-scss.js'
  ],
  npmDependencies: {
    'node-sass': '3.4.1',
    "postcss": "5.0.10",
    "postcss-scss": "0.1.3"
  }
});

Package.onUse(function (api) {
  api.versionsFrom("1.2.0.2");
  api.use('isobuild:compiler-plugin@1.0.0');
  api.addFiles(['shared/sum.js', 'shared/scope.js', 'shared/scoped.js']);
  api.export('Scope');
  api.export('Scoped');
});

Package.on_test(function (api) {
  api.use(['test-helpers',
           'tinytest']);

  api.use(['fourseven:scss']);

  // Tests for .scss
  api.addFiles([
    'test/scss/_emptyimport.scss',
    'test/scss/_not-included.scss',
    'test/scss/_top.scss',
    'test/scss/_top3.scss',
    'test/scss/empty.scss',
    'test/scss/dir/_in-dir.scss',
    'test/scss/dir/_in-dir2.scss',
    'test/scss/dir/root.scss',
    'test/scss/dir/subdir/_in-subdir.scss']);
  api.addFiles('test/scss/top2.scss', 'client', {isImport: true});

  // Tests for .sass
  //api.addFiles([
  //  'test/sass/_emptyimport.sass',
  //  'test/sass/_not-included.sass',
  //  'test/sass/_top.sass',
  //  'test/sass/_top3.sass',
  //  'test/sass/empty.sass',
  //  'test/sass/dir/_in-dir.sass',
  //  'test/sass/dir/_in-dir2.sass',
  //  'test/sass/dir/root.sass',
  //  'test/sass/dir/subdir/_in-subdir.sass']);
  //api.addFiles('test/sass/top2.sass', 'client', {isImport: true});

  api.addFiles('tests.js', 'client');

});
