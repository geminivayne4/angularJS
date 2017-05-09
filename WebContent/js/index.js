var app = angular.module('myApp', []);
app.controller('indexController', function($scope) {
	$scope.home = "hi";
	$scope.homes = "sudd";
	$scope.menuNav = [ 'vayne', 'luci', 'lulu' ];
	/*$scope.menus = [ thegioi, thegioi1, thegioi2, thegioi3 ];*/
	var thegioi = {
		id : 1,
		name : "WORLD"
	};
	var thegioi1 = {
		id : 2,
		name : "WORLD1"
	};
	var thegioi2 = {
		id : 3,
		name : "WORLD2"
	};
	var thegioi3 = {
		id : 4,
		name : "WORLD3"
	};
	$scope.test = [];
	$scope.test.push(thegioi);
	$scope.test.push(thegioi1);
	$scope.test.push(thegioi2);
	$scope.test.push(thegioi3);
});
$(document).ready(function() {
	$("#can").hide();
	$("#leftpanel #bas").click(function() {
		$("#can").slideToggle(300);
	});
});
