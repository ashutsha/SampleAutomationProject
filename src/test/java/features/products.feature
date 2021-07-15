Feature: Products
	
	
	Scenario Outline: validate promo code alert is visible when clciking on special offers
			Given I have naviagted to "<url>" website
			When I click on the button webdriver university site
			Then I should be presented with the a promo alert
			
			Examples:
			| url 															   | 
			|http://www.webdriveruniversity.com/Page-Object-Model/products.html|
			|http://www.webdriveruniversity.com/Page-Object-Model/products.html|		