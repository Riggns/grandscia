define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/veiculo/services/module');
  require('app/modules/veiculo/controllers/module');

  return require('angular')
    .module('app.veiculo', [
      'ui.router',
      'app.veiculo.controllers',
      'app.veiculo.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('veiculo.list', {
          url: '/list',
          templateUrl: 'app/modules/veiculo/views/list.html',
          controller: 'VeiculoListController'
        })
        .state('veiculo.insert', {
          url: '/insert',
          templateUrl: 'app/modules/veiculo/views/form.html',
          controller: 'VeiculoFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/veiculo/new');
            }]
          }
        })
        .state('veiculo.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/veiculo/views/form.html',
          controller: 'VeiculoFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/veiculo/' + $stateParams.id);
            }]
          }
        });
    })
});