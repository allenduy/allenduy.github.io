'use strict';

var allenduy = angular.module('allenduy', ['ngRoute']);

allenduy.config(['$routeProvider', function ($routeProvider) {

  $routeProvider.when('/', {
    templateUrl: 'partials/default.html',
    controller: 'MainCtrl',
    controllerAs: 'x'
  }).when('/about', {
    // controller: '',
    templateUrl: 'partials/about.html'
  }).when('/blog', {
    templateUrl: 'partials/blog.html',
    controller: 'BlogCtrl',
    controllerAs: 'b'
  }).when('/portfolio', {
    // controller: '',
    templateUrl: 'partials/portfolio.html'
  }).otherwise({
    redirectTo: '/'
  });

}]);