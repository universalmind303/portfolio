angular.module('portfolio', ['requests'])

.controller('portfolioCtrl', function($scope, Request, $location) {

  $scope.cardcast = () => location = 'http://corygrinstead.com/cardcast';
  $scope.groceryBag = () => location = 'http://corygrinstead.com/grocerybag';
  $scope.github = () => location = 'http://github.com/universalmind303';
});