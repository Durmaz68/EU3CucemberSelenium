package com.vytrack.step_definitions;

import com.vytrack.pages.DashboardPage;
import com.vytrack.pages.LoginPage;
import com.vytrack.utilities.BrowserUtils;
import com.vytrack.utilities.ConfigurationReader;
import com.vytrack.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;


import java.util.List;

public class ContactsStepDefs {

    @Given("the user logged as {string}")
    public void the_user_logged_as( String usertype) {
        // goto login page
        Driver.get().get(ConfigurationReader.get("url"));

        //based on input enter that user information
        String username = null;
        String password = null;

        if (usertype.equals("driver")){
            username = ConfigurationReader.get("driver_username");
            password = ConfigurationReader.get("driver_password");
        }else if(usertype.equals("sales manager")){
            username = ConfigurationReader.get("sales_manager_username");
            password = ConfigurationReader.get("sales_manager_password");
        }else if (usertype.equals("store manager")){
            username = ConfigurationReader.get("store_manager_username");
            password = ConfigurationReader.get("store_manager_password");
        }

        //Send user name password
        new LoginPage().login(username,password);

    }

    @Then("the user should see following options")
    public void the_user_should_see_following_options(List<String> menuOptions) {
        System.out.println(menuOptions.size());
        System.out.println(menuOptions);
        BrowserUtils.waitFor(2);
        //get the list of web element and convert them to list of stirng and asssert
        List<String> actualoptions = BrowserUtils.getElementsText(new DashboardPage().menuOptions);

        Assert.assertEquals(menuOptions,actualoptions);
        System.out.println("menu options = " + menuOptions);
        System.out.println("actual options =" + actualoptions);


    }
}





