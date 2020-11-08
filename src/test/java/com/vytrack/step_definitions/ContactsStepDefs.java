package com.vytrack.step_definitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

import java.util.List;

public class ContactsStepDefs {

    @Given("the user logges as {string}")
    public void the_user_logges_as(String string) {
        System.out.println("Wait little bit");
    }



    @Then("the user should see following options")
    public void the_user_should_see_following_options(List<String> menuOptions) {
        System.out.println(menuOptions.size());
        System.out.println(menuOptions);


    }


}
