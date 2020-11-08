@login
Feature: User should be able to login
  @Driver  @VYT-123 @wip
  Scenario: Login as a driver
    Given The user in on the login page
    When The user enter  the driver information
    Then The should be be able to login

  @sales_manager @VYT-123
  Scenario:  Login as a sales manager
    Given The user in on the login page
    When The user enter the sales manager information
    Then The should be be able to login

  @Store_manager @smoke
  Scenario:  Login as a store manager
    Given The user in on the login page
    When The user enter  the store information
    Then The should be be able to login
