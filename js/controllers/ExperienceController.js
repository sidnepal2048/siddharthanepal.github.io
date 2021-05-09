app.controller('ExperienceController', ['$scope', function($scope) { 
  $scope.header = "Professional Experience";

  let myExperience = [];

  myExperience.push({jobTitle:"Full Stack Developer",
  	company:"Liberty Mutual",
  	jobLength:"Dec 2020 - Present", 
  	location:"Indianapolis, Indiana",
  	responsibilities:[
  	"Involved in requirement gathering, data modeling, analysis, architecture design & development.",
  	"Worked in agile framework as an individual contributor Responsibilities include - Interaction with Business team in story grooming, reviewing story/acceptance criteria.",
	"Used Gosu, Guidewire’s open source language, to configure the Guidewire products to solve customer business challenges as a configuration and implementation resource.",
	"Involved in fixing and resolving bugs and defects.",
	"Implemented Hibernate and mybatis for data persistence and management.",
	"Developed Web services (REST and SOAP) to interact with other components.",
	"Consumed and developed REST Web Services.",
	"Used Maven for building and added lot of external dependencies.",
	"Design and develop the presentation layer using JSPs, jQuery and JavaScript.",
	"Used thymeleaf framework as a front-end technology.",
	"Used spring config server for centralized configuration and Splunk for centralized logging. Used Bamboo for Microservices deployment.",
	"Used Bamboo for CI/CD pipeline.",
	"Stored and retrieved document from S3 bucket.",
	"Implemented Spring boot and RESTful Web Services for other applications to use business services.",
	"Developed Controller for request, response paradigm by Spring Controllers using Spring-MVC.",
	"Developed a tool to retrieve and send data to third party service provider. This feature was implemented using REST."],
  	tech: "Java, Spring boot, Redis Cache, Guidewire Claim Center, Oracle, MySql, AWS"
  });

  myExperience.push({jobTitle:"Full Stack Developer",
  	company:"Liberty Mutual",
  	jobLength:"Dec 2020 - Present", 
  	location:"Indianapolis, Indiana",
  	responsibilities:[
  	"Involved in requirement gathering, data modeling, analysis, architecture design & development.",
  	"Worked in agile framework as an individual contributor Responsibilities include - Interaction with Business team in story grooming, reviewing story/acceptance criteria.",
	"Used Gosu, Guidewire’s open source language, to configure the Guidewire products to solve customer business challenges as a configuration and implementation resource.",
	"Involved in fixing and resolving bugs and defects.",
	"Implemented Hibernate and mybatis for data persistence and management.",
	"Developed Web services (REST and SOAP) to interact with other components.",
	"Consumed and developed REST Web Services.",
	"Used Maven for building and added lot of external dependencies.",
	"Design and develop the presentation layer using JSPs, jQuery and JavaScript.",
	"Used thymeleaf framework as a front-end technology.",
	"Used spring config server for centralized configuration and Splunk for centralized logging. Used Bamboo for Microservices deployment.",
	"Used Bamboo for CI/CD pipeline.",
	"Stored and retrieved document from S3 bucket.",
	"Implemented Spring boot and RESTful Web Services for other applications to use business services.",
	"Developed Controller for request, response paradigm by Spring Controllers using Spring-MVC.",
	"Developed a tool to retrieve and send data to third party service provider. This feature was implemented using REST."],
  	tech: "Java, Spring boot, Redis Cache, Guidewire Claim Center, Oracle, MySql, AWS"
  });

  myExperience.push({jobTitle:"Web Developer",
  	company:"Arnlea Systems Ltd.",
  	jobLength:"Jul 2014 - Jan 2015", 
  	location:"Iligan City, Philippines",
  	responsibilities:[
  	"Reworked front-end interface using Bootstrap.",
  	"Assisted on creating and implementing database design.",
  	"Helped develop client project using PHP, Bootstrap and CodeIgniter.",
  	"Assisted the team on QA duties and testing."
  	],
  	tech:"PHP, CodeIgniter, MySQL, Git, SASS, Grunt, AJAX, HTML, CSS, Javascript, jQuery, Bootstrap, Slack"
  });

  $scope.experience = myExperience;
}]);