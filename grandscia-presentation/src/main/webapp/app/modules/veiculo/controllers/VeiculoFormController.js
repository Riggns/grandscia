define([], function() {


 	VeiculoFormController.$inject = ['VeiculoService', '$state', 'entity', '$scope', 'gumgaController', 'ProprietarioService', 'MarcaModeloService', 'EspecieService', 'CategoriaService', 'CombustivelService'];

 	function VeiculoFormController(VeiculoService, $state, entity, $scope, gumgaController, ProprietarioService, MarcaModeloService, EspecieService, CategoriaService, CombustivelService) {

    	gumgaController.createRestMethods($scope, VeiculoService, 'veiculo');


	    gumgaController.createRestMethods($scope, ProprietarioService, 'proprietario');
	    $scope.proprietario.methods.search('nome','');    
	    gumgaController.createRestMethods($scope, MarcaModeloService, 'marcamodelo');
	    $scope.marcamodelo.methods.search('nome','');    
	    gumgaController.createRestMethods($scope, EspecieService, 'especie');
	    $scope.especie.methods.search('nome','');    
	    gumgaController.createRestMethods($scope, CategoriaService, 'categoria');
	    $scope.categoria.methods.search('nome','');    
	    gumgaController.createRestMethods($scope, CombustivelService, 'combustivel');
	    $scope.combustivel.methods.search('nome','');    

    
    	$scope.veiculo.data = entity.data || {};
		$scope.continue = {};
	
		$scope.veiculo.on('putSuccess',function(data){
			$state.go('veiculo.list');
		});
 	}
	
	return VeiculoFormController;   
});