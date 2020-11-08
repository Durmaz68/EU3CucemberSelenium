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
  "name": "the user navigate to \"Activities\" \"Calender Events\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.NavigationMenuStepDefs.the_user_navigate_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[normalize-space()\u003d\u0027Calender Events\u0027 and contains(@class, \u0027title title-level-2\u0027)]\"}\n  (Session info: chrome\u003d86.0.4240.183)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Pro.local\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u00271.8.0_242\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.183, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/jc/20r07q252mx...}, goog:chromeOptions: {debuggerAddress: localhost:50556}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 645a93392b4c25a19c22baebcaaa4cf6\n*** Element info: {Using\u003dxpath, value\u003d//span[normalize-space()\u003d\u0027Calender Events\u0027 and contains(@class, \u0027title title-level-2\u0027)]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat com.vytrack.pages.BasePage.navigateToModule(BasePage.java:113)\n\tat com.vytrack.step_definitions.NavigationMenuStepDefs.the_user_navigate_to(NavigationMenuStepDefs.java:46)\n\tat ✽.the user navigate to \"Activities\" \"Calender Events\"(file:///Users/durmaz/IdeaProjects/EU3CucemberSelenium/src/test/resources/features/Contacts.feature:16)\n",
  "status": "failed"
});
formatter.step({
  "name": "the title contains \"Calendar\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_title_contains(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});