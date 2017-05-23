define(['app/apiLocations'], function(APILocation) {

	EspecieService.$inject = ['GumgaRest'];

	function EspecieService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/especie');

    	return Service;
    }

  	return EspecieService;
});