package pageObjects;

import java.io.IOException;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import base.BasePage;

public class Products_Page extends BasePage {
	public Products_Page() throws IOException {
		super();
		// TODO Auto-generated constructor stub
	}

	//public @findBy(Xpath = "") WebElement textfield_xxxx;
	public @FindBy(xpath= "//div[@id='container-special-offers']//p[@class='sub-heading']") WebElement clickLinkPromo;
	public @FindBy(id="camera-img") WebElement cameroLink;
	public @FindBy(xpath = "//.[contains(text(),'NEWCUSTOMER')]") WebElement voucherCode;
	
	public Products_Page geturl(String url) throws InterruptedException, IOException {
	
		driver.get(url);
		return new Products_Page();
		
	}
	
	public Products_Page clickonProductPage() throws InterruptedException, IOException {
		//	WaitUntilWebElementIsVisibleUsingByLocator(By.id("camera-img"));
		//	driver.findElement(By.id("camera-img")).click();
		//	Thread.sleep(5000);
	//	WaitUntilWebElementIsVisible(clickLinkPromo);
		WaitUntilWebElementIsVisibleUsingByLocator(By.cssSelector("#container-special-offers"));
	 	getDriver().findElement(By.cssSelector("#container-special-offers")).click();
	//	 waitAndClickElement(clickLinkPromo);
		
		return new Products_Page();
		
	}
	
	public String validateLink() throws InterruptedException, IOException {
		
		WaitUntilWebElementIsVisible(voucherCode);
		String voucherCodeValue = voucherCode.getText();
		System.out.println("Voucher Code: " + voucherCode.getText());
		Assert.assertEquals("NEWCUSTOMER773322", voucherCodeValue);
		return voucherCodeValue;
		
	}
	
	
	} 
	
	

