define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/especie/services/module');
  require('app/modules/especie/controllers/module');

  return require('angular')
    .module('app.especie', [
      'ui.router',
      'app.especie.controllers',
      'app.especie.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('especie.list', {
          url: '/list',
          templateUrl: 'app/modules/especie/views/list.html',
          controller: 'EspecieListController'
        })
        .state('especie.insert', {
          url: '/insert',
          templateUrl: 'app/modules/especie/views/form.html',
          controller: 'EspecieFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/especie/new');
            }]
          }
        })
        .state('especie.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/especie/views/form.html',
          controller: 'EspecieFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/especie/' + $stateParams.id);
            }]
          }
        });
    })
});