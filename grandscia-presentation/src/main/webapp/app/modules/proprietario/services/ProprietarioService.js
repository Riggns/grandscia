define(['app/apiLocations'], function(APILocation) {

	ProprietarioService.$inject = ['GumgaRest'];

	function ProprietarioService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/proprietario');

    	return Service;
    }

  	return ProprietarioService;
});