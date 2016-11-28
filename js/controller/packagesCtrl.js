angular.module('devmtnTravel').controller('packagesCtrl',function($scope,mainSrv) {

  $scope.infos = mainSrv.travelInfo;
  

});
