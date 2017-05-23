define([], function() {

  EspecieListController.$inject = ['$scope', 'EspecieService', 'gumgaController'];

  function EspecieListController($scope, EspecieService, gumgaController) {

    gumgaController.createRestMethods($scope, EspecieService, 'especie');

    EspecieService.resetDefaultState();
    $scope.especie.execute('get');

    $scope.tableConfig = {
      columns: 'nome ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'nome',
        title: '<span gumga-translate-tag="especie.nome"> nome </span>',
        content: '{{$value.nome }}',
        sortField: 'nome'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="especie.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return EspecieListController;
});
