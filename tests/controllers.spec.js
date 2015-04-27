describe('AdvertiserCtrl', function() {
  'use strict';

  var $scope,
    advertisersArray = [{
      id: '123'
    }, {
      id: '456'
    }];

  beforeEach(module('LFX'));

  beforeEach(inject(function ($rootScope, $controller) {
    $scope = $rootScope.$new();

    $controller('AdvertiserCtrl', {
      $scope: $scope,
      advertisers: advertisersArray
    });
  }));

  it('should use the Advertiser service to add a list of advertisers to the scope', function() {
    $scope.$digest();
    expect($scope.advertisers).toEqual(advertisersArray);
  });

});
