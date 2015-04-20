(function () {
  'use strict';

  app.controller('AdvertiserController', ['$scope', 'AdvertiserService', '$log',
    function AdvertiserController($scope, AdvertiserService, $log) {

      AdvertiserService.getAll()
        .then(function (advertisers) {
          $scope.advertisers = advertisers;
        })
        .catch(function (err) {
          $log.error(err);
        });

    }]);

  app.controller('AdvertiserDetailsController', ['$scope', '$routeParams', '$location', 'AdvertiserService', '$log',
    function AdvertiserDetailsController($scope, $routeParams, $location, AdvertiserService, $log) {
      var id = $routeParams.id;

      AdvertiserService.get(id)
        .then(function (advertiser) {
          $scope.advertiser = advertiser;
        })
        .catch(function (err) {
          $log.error(err);
        });

        $scope.save = function (isValid) {
          if (isValid) {
            AdvertiserService.save($scope.advertiser)
              .then(function () {
                $location.path('advertiser');
              });
          }
        };

    }]);

}());
