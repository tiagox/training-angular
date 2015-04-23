(function () {
  'use strict';

  app.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home');

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: '/partials/home.html'
        })
        .state('advertiser', {
          url: '/advertiser',
          templateUrl : '/partials/advertiser_list.html',
          controller  : 'AdvertiserController',
          resolve: {
            advertisers: ['AdvertiserService',
              function (AdvertiserService) {
                return AdvertiserService.getAll();
              }]
          }
        })
        .state('advertiserEdit', {
          url: '/advertiser/:id/edit',
          templateUrl : '/partials/advertiser_details.html',
          controller  : 'AdvertiserDetailsController',
          resolve: {
            advertiser: ['AdvertiserService', '$stateParams',
              function (AdvertiserService, $stateParams) {
                return AdvertiserService.get($stateParams.id);
              }]
          }
        });

    }]);

}());
