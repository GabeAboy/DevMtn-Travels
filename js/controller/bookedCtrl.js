angular.module('devmtnTravel').controller('bookedCtrl',function($scope,mainSrv,$state) {
  $scope.data = mainSrv.travelInfo;
  var bookFocus = function() {
    for (var i = 0; i < $scope.data.length; i++) {
      if ($scope.data[i].id == $state.params.id){
         $scope.bookFocus = $scope.data[i];
      }
    }
  };
  bookFocus();

});
