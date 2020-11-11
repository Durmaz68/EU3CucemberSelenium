  @login
Feature: User should be able to login

    Background:
    Given The user in on the login page

  Scenario: Login as a driver
    When The user enter  the driver information
    Then The should be able to login

  @sales_manager @VYT-123
  Scenario:  Login as a sales manager
    When The user enter the sales manager information
    Then The should be able to login

  @Store_manager @smoke
  Scenario:  Login as a store manager
    When The user enter  the store information
    Then The should be able to login
