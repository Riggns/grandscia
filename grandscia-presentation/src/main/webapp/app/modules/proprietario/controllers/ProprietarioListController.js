define([], function() {

  ProprietarioListController.$inject = ['$scope', 'ProprietarioService', 'gumgaController'];

  function ProprietarioListController($scope, ProprietarioService, gumgaController) {

    gumgaController.createRestMethods($scope, ProprietarioService, 'proprietario');

    ProprietarioService.resetDefaultState();
    $scope.proprietario.execute('get');

    $scope.tableConfig = {
      columns: 'nome ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'nome',
        title: '<span gumga-translate-tag="proprietario.nome"> nome </span>',
        content: '{{$value.nome }}',
        sortField: 'nome'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="proprietario.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return ProprietarioListController;
});
