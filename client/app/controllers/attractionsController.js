angular.module('where-to.attr', [])
  .controller('AttractionsController', ['$scope', 'Detail', function($scope, Detail) {
    
    $scope.attractionsList = Detail.attractions;

  }]);
