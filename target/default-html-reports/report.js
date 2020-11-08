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
  "name": "Menu Options",
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
  "name": "the user logges as \"driver\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_user_logges_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see following options",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_user_should_see_following_options(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});