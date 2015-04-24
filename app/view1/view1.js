'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

    .controller('View1Ctrl', ['$rootScope', '$scope', function ($rootScope, $scope) {
        $rootScope.balances = {"TweetBuckz": 10000};
        function startOauth() {
          OAuth.initialize('SbsZIoL7osX0SzdnRYeA6GgzaqQ');
          OAuth.popup('twitter')
            .done(function (result) {
              $rootScope.authorizationResult = result;
              //use result.access_token in your API request
                //or use result.get|post|put|del|patch|me methods (see below)
              result.me()
                    .done(function (response) {
                      //
                  })
                  .fail(function (err) {
                    console.error(err);
                  });
            })
            .fail(function (err) {
              console.error(err);
            });
        }

        // This is not necessarily a robust generator.  It is meant to simulate
        // a random ID generator.
        function genTransId() {
          return Date.now() + $scope.user.twHandle;
        }

        function postTweet() {
          //
        }

        function getTweets() {
          var url = "/1.1/statuses/home_timeline.json";
          $rootScope.authorizationResult.get(url).done(function (data) {
            console.log(data, "getTweets");
          }).fail(function (err) {
            console.error(err);
          });
        }

        $scope.master = {twHandle: "TweetBuckz", reHandle: ""};
        $scope.reset = function () {
          $scope.user = angular.copy($scope.master);
        };
        $scope.submit = function () {
          console.log($scope.user);
        };
        $scope.refresh = function () {
          getTweets();
        };

        $scope.reset();
//        startOauth();
      }]);
