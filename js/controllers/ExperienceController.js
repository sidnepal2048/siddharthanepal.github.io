app.controller('ExperienceController', ['$scope', function($scope) { 
  $scope.header = "Professional Experience";

  let myExperience = [];
	
myExperience.push({
	jobTitle:"Sr. Software Engineer",
  	company:"AT&T",
  	jobLength:"Mar 2022 - Present", 
  	location:"Dallas, TX",
  	responsibilities:[
  	"Involved in requirement gathering, data modeling, analysis, architecture design & development.",
  	"Worked in agile framework as an individual contributor Responsibilities include - Interaction with Business team in story grooming, reviewing story/acceptance criteria.",
	"Involved in fixing and resolving bugs and defects.",
	"Consumed feeds from upstream system using apache kafka"
	"Implemented JPA for data persistence and management.",
	"Developed Web services (REST and SOAP) to interact with other components.",
	"Consumed and developed REST Web Services.",
	"Used Maven for dependencies management",
	"Use ELK stack for logging",
	"Used Jenkins and kubernetes for CI/CD pipeline.",
	"Implemented Spring boot and RESTful Web Services for other applications to use business services.",
	"Developed Controller for request, response paradigm by Spring Controllers using Spring-MVC.",
	"Developed a tool to retrieve and send data to third party service provider. This feature was implemented using REST."],
  	tech: "Java, Spring boot, Redis Cache, Postgre SQL, Cassandra, AWS, Apache Kafka"
  });
  myExperience.push({
	jobTitle:"Full Stack Developer",
  	company:"Liberty Mutual",
  	jobLength:"Aug 2018 - Feb 2022", 
  	location:"Indianapolis, IN",
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

  myExperience.push({
	jobTitle:"Java/J2EE Developer",
  	company:"NepFlights",
  	jobLength:"Mar 2014 - Jul 2016", 
  	location:"Kathmandu, Nepal",
  	responsibilities:[
  	"Developed predictive model using Apache Mahout based on Hadoop for generating clusters of real-time Big data (RSS feeds, Google news). Used supervised machine learning techniques for categorizing the new data.",
	"Cross Platform Application Manager (Android, JUnit Testing, Samsung Accessory Protocol).",
	"Developed and tested module for android application to support cross-platform communication for installing and uninstalling of Android apps from Android mobile phone to Samsung’s Galaxy Gear smartwatch running on Tizen OS.",
	"Designed and developed Stop Pay, Check Reorder component.",
	"Used Maven for building, writing test cases and documenting the application.",
	"Exchanged data using Restful Web services (JAX- RS) using Jersey implementation.",
	"Handled assignments in developing UI pages using JSP, Html, DHTML, CSS and JavaScript.",
	"Responsible to build the presentation layer by using Struts MVC framework.",
	"Developed Session Beans to process requests from the user and used entity beans to retrieve and update customer information.",
	"Involved in using Log4J to create log files to debug as well as trace.",
	"Used CVS for version control.",
	"Conduct system analysis and development, with limited support from professional staff, to keep our systems current with changing technologies.",
	"Involved in the Development of Spring Framework Controllers. Developed Controller for request, response paradigm by Spring Controllers using Spring-MVC.",
	"Developed a tool to retrieve and send data to third party service provider. This feature was implemented using REST.",
	"Analyze, design, development of software systems to form a basis for the solution of information processing problems.",
	"Responsible for analysis of current programs including performance, diagnosis and troubleshooting of programs presenting challenges and design solutions to overcome such."],
  	tech:"Java, Spring boot, Cassandra, Git, JSP, Angular, JSF, HTML, CSS, Javascript, jQuery, Bootstrap"
  });  

  $scope.experience = myExperience;
}]);
