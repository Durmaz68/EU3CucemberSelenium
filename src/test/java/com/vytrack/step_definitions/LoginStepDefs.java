package com.vytrack.step_definitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginStepDefs {

    @Given("The user in on the login page")
    public void the_user_in_on_the_login_pge() {
        System.out.println("I open browser and navigate to vytrack login page");
    }

    @When("The user enter  the driver information")
    public void the_user_enter_the_driver_information() {
        System.out.println("I put user name and UserUser123 password and click login button");
    }

    @Then("The should be be able to login")
    public void the_should_be_be_able_to_login() {
        System.out.println("I verify title changed to Dasboard");
    }

    // we add only this Scenario for login as a sales manager others same stesps
    @When("The user enter the sales manager information")
    public void the_user_enter_the_sales_manager_information() {
        System.out.println("I Enter sales manager username and password");
    }

    @When("The user enter  the store information")
    public void the_user_enter_the_store_information() {
        System.out.println("I login an store manager");
    }
}
