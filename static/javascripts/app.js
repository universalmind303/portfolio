
var myApp = angular.module('myApp', [
  'portfolio',
  'ngRoute',
]);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: '/static/partials/landing.html',
    })
    .when('/portfolio', {
      controller: 'portfolioCtrl',
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

angular.module('requests', [])

.factory('Request', function($http) {
  return {
    gotoGroceryBag: function() {
      return $http({
        url: '/grocerybag'
      });
    },
  };
});

