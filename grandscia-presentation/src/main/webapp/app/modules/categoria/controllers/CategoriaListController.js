define([], function() {

  CategoriaListController.$inject = ['$scope', 'CategoriaService', 'gumgaController'];

  function CategoriaListController($scope, CategoriaService, gumgaController) {

    gumgaController.createRestMethods($scope, CategoriaService, 'categoria');

    CategoriaService.resetDefaultState();
    $scope.categoria.execute('get');

    $scope.tableConfig = {
      columns: 'nome ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'nome',
        title: '<span gumga-translate-tag="categoria.nome"> nome </span>',
        content: '{{$value.nome }}',
        sortField: 'nome'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="categoria.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return CategoriaListController;
});
