define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/acessorios/services/module');
  require('app/modules/acessorios/controllers/module');

  return require('angular')
    .module('app.acessorios', [
      'ui.router',
      'app.acessorios.controllers',
      'app.acessorios.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('acessorios.list', {
          url: '/list',
          templateUrl: 'app/modules/acessorios/views/list.html',
          controller: 'AcessoriosListController'
        })
        .state('acessorios.insert', {
          url: '/insert',
          templateUrl: 'app/modules/acessorios/views/form.html',
          controller: 'AcessoriosFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/acessorios/new');
            }]
          }
        })
        .state('acessorios.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/acessorios/views/form.html',
          controller: 'AcessoriosFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/acessorios/' + $stateParams.id);
            }]
          }
        });
    })
});