'use strict';

/**
 * @ngdoc function
 * @name llWebfrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the llWebfrontApp
 */
angular.module('llWebfrontApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
