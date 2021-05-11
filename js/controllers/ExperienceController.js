app.controller('ExperienceController', ['$scope', function($scope) { 
  $scope.header = "Professional Experience";

  let myExperience = [];

  myExperience.push({
	jobTitle:"Full Stack Developer",
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

  myExperience.push({
	jobTitle:"Full Stack Developer",
  	company:"USAA",
  	jobLength:"Feb 2018 - Dec 2019", 
  	location:"Dallas, Texas",
  	responsibilities:[
  	"Involved in requirement gathering, data modeling, analysis, architecture design & development.",
	"Design and develop Interfaces to connect the Backend/Host Systems to process the real time transactions.",
	"Design and implemented Account lookup Restful service to automate and simplify the database querying.",
	"Strong to apply new tools and technologies in the projects, team player and goal oriented, with a commitment to excellence.",
	"Implemented AutoSys jobs, use of Mithra In-memory database and testing the existing application using Junit.",
	"Respond promptly and professionally to bug reports.",
	"Implemented external customer page using Spring MVC pattern and IOC.",
	"Automation of deployment and enhancement of web services testing framework primarily JBehave.",
	"Involved to work CA IDM web service interface is to allow third-party applications.",
	"Develop/program new functionality and features in line with functional specifications and business requirements.",
	"Provide recommendations to management concerning issues of programmer productivity and software development management.",
	"Develop core Java programs for all business rules and workflows using spring framework.",
	"Refactor existing code structure to separate core business logic and Data Access Objects (DAOs).",
	"Implement Hibernate for data persistence and management.",
	"Analyze and fix issues related to Soap Web services and Application responses.",
	"Write database queries and programs for data insertion, updates and views.",
	"Design and develop the presentation layer using JSPs, jQuery and JavaScript.",
	"Developed Web services (REST) through JAX-WS in Apache Axis to interact with other components.",
	"Consumed and developed REST Web Services.",
	"Used Maven for building and added lot of external dependencies.",
	"Written JDBC templates, email and JMS to easily switchable.",
	"Implemented Web services using Apache CXF.",
	"Implemented RESTful Web Services for other applications to use business services."],
  	tech: "Java, Spring boot, Oracle, MySql, AWS"
  });

  myExperience.push({
	jobTitle:"Research Developer",
  	company:"United Airlines",
  	jobLength:"Nov 2016 - Jan 2018", 
  	location:"Chicago, Illinoi",
  	responsibilities:[
  	"Implemented Nimsoft Probe deployment and auto propagation of config settings among all the nodes in a Cassandra.",
	"Developed REST API calls to register, delete, start, stop various services of MongoDB and Cassandra clusters.",
	"Developed module for configuring MongoDB and Cassandra nodes with Kerberos Authentication protocol and enabled password-based validation using Nimsoft encryption/decryption APIs.",
	"Reviewed team member’s code and suggested improvements.",
	"Involved in requirement gathering, data modeling, analysis, architecture design & development.",
	"Coordinating with different teams like Onshore/Offshore.",
	"Worked on designing the User Interface by coding in JSP, JSF 2.0, HTML5, Bootstrap, AJAX, jQuery, JavaScript and Angular 2 to create the SPA (Single Page Application).",
	"Used RESTful web services to communicate with different layers within the application.",
	"Used Hibernate to communicate with the Database, mapping the entities to the tables and corresponding columns in the database by using Hibernate annotations.",
	"Hands-on working along with the team for implementation, testing and deployment.",
	"Developed web user interface using Html5, JSP, JSTL, JSF tags and custom tag libraries.",
	"Implemented Spring MVC to facilitate stable flow from front end.",
	"Implemented various design patterns in the project such as Business Delegate, Data Transfer Object, Data Access Object, Service Locator, Factory and Singleton.",
	"Involved in IDM migration and hands-on creating roles like user provisioni.ng and maintenance, configuring different portal applications in IDM and roles creation for different teams like testing/development and production support teams using IDM OAM and OIM.",
	"Involved in PL/SQL query writing functions, tuning and package implementations.",
	"Integrated WAS server with IBM MQ and created Queue connection factories and JMS queues."],
  	tech:"Java, Spring boot, Cassandra, Git, JSP, Angular, JSF, HTML, CSS, Javascript, jQuery, Bootstrap, Slack"
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