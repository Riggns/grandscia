define([], function() {


 	EspecieFormController.$inject = ['EspecieService', '$state', 'entity', '$scope', 'gumgaController'];

 	function EspecieFormController(EspecieService, $state, entity, $scope, gumgaController) {

    	gumgaController.createRestMethods($scope, EspecieService, 'especie');



    
    	$scope.especie.data = entity.data || {};
		$scope.continue = {};
	
		$scope.especie.on('putSuccess',function(data){
			$state.go('especie.list');
		});
 	}
	
	return EspecieFormController;   
});