define(['app/apiLocations'], function(APILocation) {

	VeiculoService.$inject = ['GumgaRest'];

	function VeiculoService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/veiculo');

    	return Service;
    }

  	return VeiculoService;
});