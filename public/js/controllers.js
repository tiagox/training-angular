(function () {
  'use strict';

  app.controller('AdvertiserCtrl', ['$scope', '$log', 'advertisers',
    function AdvertiserCtrl($scope, $log, advertisers) {
      $scope.advertisers = advertisers;
    }]);

  app.controller('AdvertiserEditCtrl', ['$scope', '$state', 'AdvertiserService', 'advertiser',
    function AdvertiserDetailsCtrl($scope, $state, AdvertiserService, advertiser) {
      $scope.advertiser = advertiser;
      $scope.save = function () {
        AdvertiserService.save($scope.advertiser)
          .then(function () {
            $state.go('advertiser');
          });
      };
    }]);

  app.controller('AdvertiserDetailsCtrl', ['$scope', 'advertiser',
    function AdvertiserDetailsCtrl($scope, advertiser) {
      $scope.advertiser = advertiser;
    }]);

  app.controller('AdvertiserDetailsGeneralCtrl', ['$scope', 'advertiser',
    function AdvertiserDetailsGeneralCtrl($scope, advertiser) {
      $scope.advertiser = advertiser;
    }]);

}());
