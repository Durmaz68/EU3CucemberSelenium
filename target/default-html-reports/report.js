$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Contacts.feature");
formatter.feature({
  "name": "Contact page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ContactsParameter"
    }
  ]
});
formatter.scenario({
  "name": "verify Create Calender Event",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ContactsParameter"
    },
    {
      "name": "@wip"
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
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_in_on_the_login_page()"
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
  "name": "the user navigate to \"Activities\" \"Calendar Events\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.NavigationMenuStepDefs.the_user_navigate_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title contains \"Calendar\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_title_contains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});