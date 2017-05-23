define([], function() {


 	ProprietarioFormController.$inject = ['ProprietarioService', '$state', 'entity', '$scope', 'gumgaController'];

 	function ProprietarioFormController(ProprietarioService, $state, entity, $scope, gumgaController) {

    	gumgaController.createRestMethods($scope, ProprietarioService, 'proprietario');



    
    	$scope.proprietario.data = entity.data || {};
		$scope.continue = {};
	
		$scope.proprietario.on('putSuccess',function(data){
			$state.go('proprietario.list');
		});
 	}
	
	return ProprietarioFormController;   
});