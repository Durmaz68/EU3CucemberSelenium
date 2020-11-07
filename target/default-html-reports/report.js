$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/NavigationMenu.feature");
formatter.feature({
  "name": "Navigation menu",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Navigate"
    }
  ]
});
formatter.scenario({
  "name": "Navigation Fleet -- vehicles",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Navigate"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user in on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_in_on_the_login_pge()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enter the sales manager information",
  "keyword": "And "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_enter_the_sales_manager_information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigate to Fleet, Vehicles",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.NavigationMenuStepDefs.the_user_navigate_to_Fleet_Vehicles()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hte title should be Vehicles",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.NavigationMenuStepDefs.hte_title_should_be_Vehicles()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Navigating Marketing Campaings",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Navigate"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user in on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_in_on_the_login_pge()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enter the sales manager information",
  "keyword": "And "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_enter_the_sales_manager_information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user nagivate to Marketing, Campaigns",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.NavigationMenuStepDefs.the_user_nagivate_to_Marketing_Campaigns()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title should be Campaigns",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.NavigationMenuStepDefs.title_should_be_Campaigns()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Navigating Activities -- Calendar Events",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Navigate"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user in on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_in_on_the_login_pge()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enter the sales manager information",
  "keyword": "And "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_enter_the_sales_manager_information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to Activities,Calendar Events",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.NavigationMenuStepDefs.the_user_navigates_to_Activities_Calendar_Events()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title should be Calendars",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.NavigationMenuStepDefs.title_should_be_Calendars()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});