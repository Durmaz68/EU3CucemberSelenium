package com.vytrack.step_definitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class NavigationMenuStepDefs {
    @When("the user navigate to Fleet, Vehicles")
    public void the_user_navigate_to_Fleet_Vehicles() {
        //Selenium code
        System.out.println("The user navigate to Fleet,l Vehicle");
    }

    @Then("hte title should be Vehicles")
    public void hte_title_should_be_Vehicles() {

        System.out.println("Expected and actual title matching");
    }

    @When("the user nagivate to Marketing, Campaigns")
    public void the_user_nagivate_to_Marketing_Campaigns() {
        System.out.println("The user navigate to Marketing, Campaing");

    }

    @Then("title should be Campaigns")
    public void title_should_be_Campaigns() {
        System.out.println("Expect and actual Tittle matching");
    }

    @When("the user navigates to Activities,Calendar Events")
    public void the_user_navigates_to_Activities_Calendar_Events() {
        System.out.println("The user navigate to Activities, Calender Events");
    }

    @Then("title should be Calendars")
    public void title_should_be_Calendars() {
        System.out.println("Expect and actual Tittle matching");
    }


}
