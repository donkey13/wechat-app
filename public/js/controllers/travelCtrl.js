angular.module('TravelCtrl', []).controller('TravelController', function($scope) {

	$scope.tagline = '归属等待审批的列表在这里';

	$scope.travels = ['apple', 'orange', 'pear', 'naartjie'];
	
	$scope.selection = ['apple', 'pear'];

	  // Toggle selection for a given fruit by name
	  $scope.toggleSelection = function toggleSelection(travelDes) {
		var idx = $scope.selection.indexOf(travelDes);
	
		// Is currently selected
		if (idx > -1) {
		  $scope.selection.splice(idx, 1);
		}
	
		// Is newly selected
		else {
		  $scope.selection.push(travelDes);
		}
	  };

});