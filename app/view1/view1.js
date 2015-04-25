'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
          templateUrl: 'view1/view1.html',
          controller: 'View1Ctrl'
        });
      }])
    .controller('View1Ctrl', ['$rootScope', '$scope', function ($rootScope, $scope) {
        // This is the 'database' for this front-end-only application.
        $rootScope.balances = {"TweetBuckz": 10000, "uzer": 0};
        function startOauth() {
          OAuth.initialize('SbsZIoL7osX0SzdnRYeA6GgzaqQ');
          OAuth.popup('twitter')
              .done(function (result) {
                $rootScope.authorizationResult = result;
              })
              .fail(function (err) {
                console.error(err);
              });
        }

        // This is not necessarily a robust generator.  It is meant to simulate
        // a random ID generator.
        function genTransId(dateStamp, recipient) {
          return Date.parse(dateStamp) + $scope.user.twHandle.slice(0, 2) + recipient.slice(0, 2);
        }

        function postTweet(recipient, amount, dateStamp) {
          var newTweet;
          if (+amount < $rootScope.balances[$scope.user.twHandle]) {
            newTweet = "--- " + recipient
                + " $$ " + amount
                + " xID " + genTransId(dateStamp, recipient);
            $rootScope.balances[recipient] += amount;
            $rootScope.balances[$scope.user.twHandle] -= amount;
            $rootScope.authorizationResult.post('/1.1/statuses/update.json', {
              data: {
                status: newTweet
              }
            }).done(function (data) {
              console.log("Message successfully sent.");
            }).fail(function (err) {
              console.error(err);
            });
          }
          $scope.reset();
          // adjust balance
        }

        function deleteTweet(ID) {
          var url = "1.1/statuses/destroy/" + ID + ".json";
          $rootScope.authorizationResult.post(url).then(function (data) {
            console.log("Message successfully deleted.");
          }).fail(function (err) {
            console.error(err);
          });
        }

        function getTweets() {
          var url = "/1.1/statuses/home_timeline.json";
          $rootScope.authorizationResult.get(url).done(function (data) {
            var i, dateStamp, tweetBody, recipientIndex, amountIndex;

            // Each transaction needs a unique digital ID to be validated.  As
            // the app should be the only source of transaction ID's, it looks
            // for any transactions that are initiated outside of itself and
            // assigns them ID's, posts the new message to Twitter, and deletes
            // old one.
            $scope.tweets = data;
            $scope.$apply();
            for (i = data.length - 1; i >= 0; i -= 1) {
              if ((data[i].text.indexOf("---") > -1) && (data[i].text.indexOf("xID") < 0)) {
                tweetBody = data[i].text.split(" ");
                amountIndex = tweetBody.indexOf("$$") + 1;
                recipientIndex = tweetBody.indexOf("---") + 1;
                dateStamp = data[i].created_at;
                postTweet(tweetBody[recipientIndex], tweetBody[amountIndex], dateStamp);
                deleteTweet(data[i].id_str);
              }
            }
          }).fail(function (err) {
            console.error(err);
          });
        }

        $scope.master = {twHandle: "TweetBuckz", reHandle: "uzer"};
        $scope.reset = function () {
          $scope.user = angular.copy($scope.master);
        };
        $scope.submit = function () {
          postTweet($scope.user.reHandle, $scope.user.amount, new Date());
        };
        $scope.refresh = function () {
          getTweets();
        };

        $scope.reset();
        startOauth();
      }]);
