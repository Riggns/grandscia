define([], function() {

  CombustivelListController.$inject = ['$scope', 'CombustivelService', 'gumgaController'];

  function CombustivelListController($scope, CombustivelService, gumgaController) {

    gumgaController.createRestMethods($scope, CombustivelService, 'combustivel');

    CombustivelService.resetDefaultState();
    $scope.combustivel.execute('get');

    $scope.tableConfig = {
      columns: 'nome ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'nome',
        title: '<span gumga-translate-tag="combustivel.nome"> nome </span>',
        content: '{{$value.nome }}',
        sortField: 'nome'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="combustivel.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return CombustivelListController;
});
