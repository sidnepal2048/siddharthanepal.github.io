app.controller('AboutMeController', ['$scope', function($scope) { 
  $scope.greetings1 = "Hello,";
  $scope.greetings2 = "a bit about me:";
  $scope.summary = "Energetic software developer, 7 years of experience who can bring diverse skillset and creative drive to software application development. Proficient at designing, testing and feature development and implementation using cutting edge technologies. Creative thinker and enthusiastic team player dedicated to efficiently resolve project issues. Highly adaptable to quickly changing technical environments with a very strong organization and analytical skills. In my last job, I’ve worked as a team player, leading and actively communicating with the client to deliver the tailor-made quality projects on time."

  let myInfo = [];

  myInfo.push({title:"Wise Words",description:"The expert in anything was once a beginner."});
  myInfo.push({title:"Hobbies",description:"Playing the guitar, watching soccer, travelling."});
  myInfo.push({title:"Web Developer",description:"I create web pages and web-based systems based on the client."});
  myInfo.push({title:"Gamer",description:"Gamers don't die, We respawn.", gameLink:"#", gameMessage:"Add me on Steam"});

  $scope.aboutMe = myInfo;

}]);
