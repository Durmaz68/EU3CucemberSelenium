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

  @wip
  Scenario: Menu Options
    Given the user logged as "driver"
    Then the user should see following options
      | Fleet      |
      | Customers  |
      | Activities |
      | System     |

  Scenario: Menu Options Sales Manager
    Given the user logged as "sales maneger"
    Then the user should see following options
      | Dashboard          |
      | Fleet              |
      | Customers          |
      | Sales              |
      | Activities         |
      | Marketing          |
      | Reports & Segments |
      | System             |

