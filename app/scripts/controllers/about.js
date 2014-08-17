'use strict';

/**
 * @ngdoc function
 * @name llWebfrontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the llWebfrontApp
 */
angular.module('llWebfrontApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
