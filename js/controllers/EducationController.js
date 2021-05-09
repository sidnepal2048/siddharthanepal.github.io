app.controller('EducationController', ['$scope', function($scope) { 
  $scope.header = "Education";

  let mySchool = {
    school:"University of Central Missouri",
    degree: ["Master of Science in Big Data Analytics",
             "Master of Science in Computer Information System"]
  }
  $scope.education = mySchool;
}]);