module.exports = function(config){
  config.set({

    basePath: '../',

    files: [
      'static/vendor/angular/angular.js',
      'static/vendor/angular-route/angular-route.js',
      'static/vendor/angular-mocks/angular-mocks.js',
      'static/js/**/*.js',
      'tests/js/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine'
    ]

  });
};
