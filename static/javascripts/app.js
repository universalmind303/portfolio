'use strict';   // See note about 'use strict'; below

var myApp = angular.module('myApp', [
  'ngRoute',
]);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: '/static/partials/landing.html',
    })
    .when('/portfolio', {
      templateUrl: '../static/partials/portfolio.html',
    })
    .when('/blogs', {
      templateUrl: '/static/partials/blogs.html'
    })
    .when('/contact', {
      templateUrl: '/static/partials/contact.html'
    })    
    .otherwise({
      redirectTo: '/'
    });
  }]);