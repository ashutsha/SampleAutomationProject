package step_definitions;

import Utilities.DriverFactory;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ProductsSteps extends DriverFactory {
	@Given("^I have naviagted to \"([^\"]*)\" website$")
	public void i_have_naviagted_to_website(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		productsPage.geturl(arg1);
		
	}

	@When("^I click on the button webdriver university site$")
	public void i_click_on_the_button_webdriver_university_site() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		productsPage.clickonProductPage();
	}

	    

	    @Then("^I should be presented with the a promo alert$")
	    public void i_should_be_presented_with_the_a_promo_alert() throws Throwable {
	    	//productsPage.clickonProductPage();
	    	
	    	productsPage.validateLink();
	    	
	    }


}
