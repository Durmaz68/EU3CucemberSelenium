Feature:  Login as different users
  @LoginPrameter
  Scenario:  login user as driver user
    Given The user in on the login page
    When the user logs in using "user10" and "UserUser123"
    Then The should be be able to login
    And the title contains "Dashboard"
