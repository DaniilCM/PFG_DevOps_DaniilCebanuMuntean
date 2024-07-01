Project for final thesis related to DevOps.

Project consists of an application that has two microservices, one which manages tasks with no priority and another that manages tasks with priority. The front-end is done with React and it manages all tasks in order to show them to the user.
This project is managed by Jenkins in an Azure server, for continuous integration and it generates static code analysis with SonarQube. It also does continuous delivery to another Azure server with Tomcat. Tomcat deploys the application and runs it.
Also, the objective of the thesis is to do observability and monitoring to all these instances with Datadog and see how it helps enterprises to develop better software and how to act when issues happen, before they reach the end customer.
