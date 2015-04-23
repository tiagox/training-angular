(function () {
  'use strict';

  app.controller('AdvertiserController', ['$scope', '$log', 'advertisers',
    function AdvertiserController($scope, $log, advertisers) {
      $scope.advertisers = advertisers;
    }]);

  app.controller('AdvertiserEditController', ['$scope', '$state', 'AdvertiserService', 'advertiser',
    function AdvertiserDetailsController($scope, $state, AdvertiserService, advertiser) {
      $scope.advertiser = advertiser;
      $scope.save = function () {
        AdvertiserService.save($scope.advertiser)
          .then(function () {
            $state.go('advertiser');
          });
      };
    }]);

}());
