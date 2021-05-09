app.controller('MainController', ['$scope', function($scope) { 
  $scope.myName = 'Siddhartha Nepal';

  let menuItems = [
  {
  	menuId:'#experience',
  	name: 'Experience'
  },
  {
  	menuId:'#skills',
  	name: 'Skills'
  },
  {
  	menuId:'#projects',
  	name: 'Projects'
  },
  {
  	menuId:'#education',
  	name: 'Education'
  }
  ];

  $scope.menuList = menuItems;
}]);