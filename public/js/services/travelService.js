// public/js/services/travelService.js
angular.module('travelService', []).factory('Travel', ['$http', function($http) {

    return {
        // call to get all travels
        get : function() {
            return $http.get('/api/travels');
        },

                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new travel
        create : function(travelData) {
            return $http.post('/api/travel', travelData);
        },

        // call to DELETE a travel
        delete : function(id) {
            return $http.delete('/api/travels/' + id);
        }
    }       

}]);