package com.vytrack.step_definitions;

import com.vytrack.pages.ContactsPage;
import com.vytrack.pages.DashboardPage;
import com.vytrack.utilities.BrowserUtils;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

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

    @When("the user navigate to {string} {string}")
    public void the_user_navigate_to(String tab, String module) {
        new DashboardPage().navigateToModule(tab,module);
    }

    @Then("default page number should be {int}")
    public void default_page_number_should_be(Integer expectedPageNum) {

        BrowserUtils.waitFor(4);
        ContactsPage contactsPage = new ContactsPage();
        Integer actualNumber = Integer.parseInt(contactsPage.pageNumber.getAttribute("value"));

        Assert.assertEquals(expectedPageNum,actualNumber);
    }


}
