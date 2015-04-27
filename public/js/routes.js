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
          controller  : 'AdvertiserCtrl',
          resolve: {
            advertisers: ['AdvertiserService',
              function (AdvertiserService) {
                return AdvertiserService.getAll();
              }]
          }
        })
        .state('advertiserEdit', {
          url: '/advertiser/:id/edit',
          templateUrl : '/partials/advertiser_edit.html',
          controller  : 'AdvertiserEditCtrl',
          resolve: {
            advertiser: ['AdvertiserService', '$stateParams',
              function (AdvertiserService, $stateParams) {
                return AdvertiserService.get($stateParams.id);
              }]
          }
        })
        .state('advertiserDetails', {
          url: '/advertiser/:id/details',
          abstract: true,
          templateUrl: '/partials/advertiser_details.html',
          controller: 'AdvertiserDetailsCtrl',
          resolve: {
            advertiser: ['AdvertiserService', '$stateParams',
              function (AdvertiserService, $stateParams) {
                return AdvertiserService.get($stateParams.id);
              }]
          }
        })
        .state('advertiserDetails.general', {
          url: '/general',
          templateUrl: '/partials/advertiser_details_general.html',
          controller  : 'AdvertiserDetailsGeneralCtrl'
        })
        .state('advertiserDetails.settings', {
          url: '/settings',
          templateUrl : '/partials/advertiser_edit.html',
          controller  : 'AdvertiserEditCtrl'
        });

    }]);

}());
