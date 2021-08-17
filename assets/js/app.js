angular.module('myApp.controllers', []);
angular.module('myApp.models', []);
var myApp = angular.module('myApp', [
  'ui.router',
  'myApp.controllers',
  'myApp.models'
]);

// configure our routes

// Add in Production
// myApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

//remove in production
myApp.config(function ($stateProvider, $urlRouterProvider) {
  // Add in Production
  // $locationProvider.html5Mode(true);

  //remove in production
  $urlRouterProvider.otherwise('/');

  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise(function ($injector) {
    $injector.invoke(function ($state) {
      $state.transitionTo('404', {}, false);
    });
  });

  // Now set up the states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'partials/home.html'
    })

    .state('about', {
      url: '/the-firm',
      templateUrl: 'partials/about.html'
    })

    .state('services', {
      url: '/practice-areas',
      templateUrl: 'partials/services.html'
    })

    .state('contact', {
      url: '/contact',
      templateUrl: 'partials/contact.html'
    })

    .state('404', {
      templateUrl: 'partials/404.html'
    });
});