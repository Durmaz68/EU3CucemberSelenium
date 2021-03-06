package com.vytrack.step_definitions;

import com.vytrack.pages.LoginPage;
import com.vytrack.utilities.BrowserUtils;
import com.vytrack.utilities.ConfigurationReader;
import com.vytrack.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class LoginStepDefs {

    @Given("The user in on the login page")
    public void the_user_in_on_the_login_page() {
        String url = ConfigurationReader.get("url");
        //WebDriver driver = Driver.get(); we dont need any more in cucumber
        Driver.get().get(url);
    }

    @When("The user enter  the driver information")
    public void the_user_enter_the_driver_information() {
      String username =ConfigurationReader.get("driver_username");
      String password = ConfigurationReader.get("driver_password");
        LoginPage loginPage = new LoginPage();
        loginPage.login(username,password);
    }

    @Then("The should be able to login")
    public void the_should_be_able_to_login() {
        BrowserUtils.waitFor(3);
       String actualTitle = Driver.get().getTitle();
        Assert.assertEquals("Dashboard",actualTitle);
    }

    // we add only this Scenario for login as a sales manager others same stesps
    @When("The user enter the sales manager information")
    public void the_user_enter_the_sales_manager_information() {
        String username =ConfigurationReader.get("sales_manager_username");
        String password = ConfigurationReader.get("sales_manager_password");
        LoginPage loginPage = new LoginPage();
        loginPage.login(username,password);
    }

    @When("The user enter  the store information")
    public void the_user_enter_the_store_information() {
        String username =ConfigurationReader.get("store_manager_username");
        String password = ConfigurationReader.get("store_manager_password");
        LoginPage loginPage = new LoginPage();
        loginPage.login(username,password);
    }

    @When("the user logs in using {string} and {string}")
    public void the_user_logs_in_using_and(String username, String password) {
        LoginPage loginPage = new LoginPage();
        loginPage.login(username,password);
    }

    @Then("the title contains {string}")
    public void the_title_contains(String expectedTitle) {
        System.out.println("expectedTitle =" + expectedTitle);
        BrowserUtils.waitFor(3);
        Assert.assertTrue(Driver.get().getTitle().contains(expectedTitle));
    }
}
