define([], function() {

  MarcaModeloListController.$inject = ['$scope', 'MarcaModeloService', 'gumgaController'];

  function MarcaModeloListController($scope, MarcaModeloService, gumgaController) {

    gumgaController.createRestMethods($scope, MarcaModeloService, 'marcamodelo');

    MarcaModeloService.resetDefaultState();
    $scope.marcamodelo.execute('get');

    $scope.tableConfig = {
      columns: 'nome ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'nome',
        title: '<span gumga-translate-tag="marcamodelo.nome"> nome </span>',
        content: '{{$value.nome }}',
        sortField: 'nome'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="marcamodelo.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return MarcaModeloListController;
});
