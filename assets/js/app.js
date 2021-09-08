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

  // Add in Production
  // For any unmatched url, redirect to /state1
  // $urlRouterProvider.otherwise(function ($injector) {
  //   $injector.invoke(function ($state) {
  //     $state.transitionTo('404', {}, false);
  //   });
  // });

  // Now set up the states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'partials/home.html'
    })

    .state('about', {
      url: '/about-us',
      templateUrl: 'partials/about.html'
    })

    .state('services', {
      url: '/services',
      templateUrl: 'partials/services.html'
    })

    .state('offshore', {
      url: '/services/marine-and-offshore-support-services',
      templateUrl: 'partials/marine-and-offshore.html'
    })

    .state('petroleum', {
      url: '/services/trading-and-supply-of-petroleum-products',
      templateUrl: 'partials/trading-and-supply-of-petroleum-products.html'
    })

    .state('manpower', {
      url: '/services/manpower-supply-and-management',
      templateUrl: 'partials/manpower-supply-and-management.html'
    })

    .state('procurement', {
      url: '/services/procurement',
      templateUrl: 'partials/procuremente.html'
    })

    .state('contact', {
      url: '/contact',
      templateUrl: 'partials/contact.html'
    })

    .state('careers', {
      url: '/careers',
      templateUrl: 'partials/careers.html'
    })

    .state('404', {
      templateUrl: 'partials/404.html'
    });
});
