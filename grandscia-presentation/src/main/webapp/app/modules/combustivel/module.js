define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/combustivel/services/module');
  require('app/modules/combustivel/controllers/module');

  return require('angular')
    .module('app.combustivel', [
      'ui.router',
      'app.combustivel.controllers',
      'app.combustivel.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('combustivel.list', {
          url: '/list',
          templateUrl: 'app/modules/combustivel/views/list.html',
          controller: 'CombustivelListController'
        })
        .state('combustivel.insert', {
          url: '/insert',
          templateUrl: 'app/modules/combustivel/views/form.html',
          controller: 'CombustivelFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/combustivel/new');
            }]
          }
        })
        .state('combustivel.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/combustivel/views/form.html',
          controller: 'CombustivelFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/combustivel/' + $stateParams.id);
            }]
          }
        });
    })
});