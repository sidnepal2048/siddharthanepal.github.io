app.controller('AboutMeController', ['$scope', function($scope) { 
  $scope.greetings1 = "Hello,";
  $scope.greetings2 = "a bit about me:";
  $scope.summary = "I am a software engineer with 8 years of experience in web and software development. I am highly familiar with the technologies and wide variety of tools used for web development. Regarding my education, I possess a Master Degree in Computer Information System."

  let myInfo = [];

  myInfo.push({title:"Wise Words",description:"The expert in anything was once a beginner."});
  myInfo.push({title:"Hobbies",description:"Playing the guitar, watching soccer, travelling."});
  myInfo.push({title:"Web Developer",description:"I create web pages and web-based systems based on the client."});
  myInfo.push({title:"Gamer",description:"Gamers don't die, We respawn.", gameLink:"#", gameMessage:"Add me on Steam"});

  $scope.aboutMe = myInfo;

}]);