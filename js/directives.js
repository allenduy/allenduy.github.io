allenduy.directive('skull', [function () {
  return {
    priority: 1000,
    templateUrl: 'partials/skull.html',
    replace: true,
    transclude: true,
    restrict: 'E',
    scope: true,
    link: function(scope, element, attrs) {
      console.log(this);
      console.log(document);
      console.log(scope);
      console.log(element);
      console.log(attrs);
    }
  };
}]);