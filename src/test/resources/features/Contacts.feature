@ContactsParameter
Feature:Contact page


  Scenario: Default page number
    Given  The user in on the login page
    And  The user enter  the driver information
    When the user navigate to "Customers" "Contacts"
    Then default page number should be 1


  Scenario: verify Create Calender Event
    Given The user in on the login page
    And The user enter the sales manager information
    When the user navigate to "Activities" "Calendar Events"
    Then the title contains "Calendar"
      #add "s" at the and of the calender to fail
  @smoke
  Scenario: Menu Options
    Given the user logged as "driver"
    Then the user should see following options
      | Fleet     |
      | Customers  |
      | Activities |
      | System     |
  @smoke
  Scenario: Menu Options Sales Manager
    Given the user logged as "sales manager"
    Then the user should see following options
      | Dashboards         |
      | Fleet              |
      | Customers          |
      | Sales              |
      | Activities         |
      | Marketing          |
      | Reports & Segments |
      | System             |


  Scenario: login as a given user
    Given The user in on the login page
    When The user logs in using following credentials
      | username  | user10      |
      | password  | UserUser123 |
      | firstname | Brenden     |
      | lastname  | Schneider   |
    Then The user in on the login page