
@ContactsParameter
Feature:Contact page

  
  Scenario: Default page number
    Given  The user in on the login page
    And  The user enter  the driver information
    When the user navigate to "Customers" "Contacts"
    Then default page number should be 1

    @wip
    Scenario: verify Create Calender Event
      Given The user in on the login page
      And The user enter the sales manager information
      When the user navigate to "Activities" "Calender Events"
      Then the title contains "Calendar"
      
