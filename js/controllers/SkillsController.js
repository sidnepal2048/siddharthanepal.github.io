app.controller('SkillsController', ['$scope', function($scope) { 
   $scope.header = "Skills and Technology";

  let mySkills = {
    web:" CSS, HTML, Javascript, jQuery, SQL, Bootstrap 4, REST/SOAP Architecture, Git",
    lang: " Java, J2EE, familiar with Python",
    mobile: " familiar with Android",
    others: " Spring MVC, Spring Boot, Oracle, Maven, SonarQube, Redis Cache, Jmeter, NodeJS, Angular, JUnit, Mockito, UNIX scripting"
  }
  $scope.skills = mySkills;

}]);