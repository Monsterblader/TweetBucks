'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

    .controller('View1Ctrl', ['$rootScope', function ($rootScope) {
        OAuth.initialize('SbsZIoL7osX0SzdnRYeA6GgzaqQ');
        OAuth.popup('twitter')
            .done(function (result) {
              $rootScope.authorizationResult = result;
              //use result.access_token in your API request
              //or use result.get|post|put|del|patch|me methods (see below)
              result.me()
                  .done(function (response) {
                    console.log('Firstname: ', response.firstname);
                    console.log('Lastname: ', response.lastname);
                  })
                  .fail(function (err) {
                    //handle error with err
                  });
            })
            .fail(function (err) {
              console.error(err);
            });
}]);