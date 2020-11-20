Feature: Account Types

  Scenario:  Driver user
    Given the user logged as "driver"
    When the user navigate to "Activities" "Calendar Events"
    Then the title contains "Calendar Events - Activities"

  Scenario: Sales Manager user
    Given the user logged as "sales manager"
    When  the user navigate to "Customer" "Accounts"
    Then the title contains "Accounts - Customers"

  Scenario: Store Manager user
    Given the user logged as "store manager"
    When the user navigate to "Customers" "Contacts"
    Then the title contains "Contacts - Customers"

  #Scenario:  Driver User
  #  Given the user logged as "driver"

 # Scenario: Sales manager User
  #  Given the user logged as "sales manager"

  #Scenario: Store Manger user
  #  Given the user logged as "store maneger"

  @wip
  Scenario Outline: Login with diffirent accounts<usertype>
    Given the user logged as "<userType>"
    When the user navigate to "<tab>" "<module>"
    Then the title contains "<title>"

    Examples:
      | userType      | tab        | module          | title                        |
      | driver        | Activities | Calendar Events | Calendar Events - Activities |
      | store manager | Customers  | Contacts        | Contacts - Customers         |
      | sales manager | Customers  | Accounts        | Accounts - Customers         |


  Scenario Outline: Different user types
    Given the user logged as "<userType>"

    Examples:
      | userType      |
      | driver        |
      | store manager |
      | sales manager |