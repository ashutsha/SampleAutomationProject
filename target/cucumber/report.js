$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("contactus.feature");
formatter.feature({
  "line": 1,
  "name": "Submit data to webdriveruniversity.com using contact us form",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1834243100,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Submit valid data via contact us form",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form;submit-valid-data-via-contact-us-form",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I access webdriveruniversity contact us form",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter a valid firstname",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter a valid last name",
  "rows": [
    {
      "cells": [
        "woods",
        "jackson",
        "jones"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "i enter a valid email address",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "i enter comments",
  "rows": [
    {
      "cells": [
        "example comment one",
        "example comment two"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "i click on the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the information should successfully be submitted via the contact us form",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUsSteps.i_access_webdriveruniversity_contact_us_form()"
});
formatter.result({
  "duration": 2087386600,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_a_valid_firstname()"
});
formatter.result({
  "duration": 321470900,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_a_valid_last_name(DataTable)"
});
formatter.result({
  "duration": 274384300,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_a_valid_email_address()"
});
formatter.result({
  "duration": 280725900,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_comments(DataTable)"
});
formatter.result({
  "duration": 282369000,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_click_on_the_submit_button()"
});
formatter.result({
  "duration": 1683462400,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.the_information_should_successfully_be_submitted_via_the_contact_us_form()"
});
formatter.result({
  "duration": 80045900,
  "status": "passed"
});
formatter.after({
  "duration": 671639900,
  "status": "passed"
});
formatter.uri("products.feature");
formatter.feature({
  "line": 1,
  "name": "Products",
  "description": "",
  "id": "products",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "validate promo code alert is visible when clciking on special offers",
  "description": "",
  "id": "products;validate-promo-code-alert-is-visible-when-clciking-on-special-offers",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I have naviagted to \"\u003curl\u003e\" website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the button webdriver university site",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be presented with the a promo alert",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "products;validate-promo-code-alert-is-visible-when-clciking-on-special-offers;",
  "rows": [
    {
      "cells": [
        "url"
      ],
      "line": 10,
      "id": "products;validate-promo-code-alert-is-visible-when-clciking-on-special-offers;;1"
    },
    {
      "cells": [
        "http://www.webdriveruniversity.com/Page-Object-Model/products.html"
      ],
      "line": 11,
      "id": "products;validate-promo-code-alert-is-visible-when-clciking-on-special-offers;;2"
    },
    {
      "cells": [
        "http://www.webdriveruniversity.com/Page-Object-Model/products.html"
      ],
      "line": 12,
      "id": "products;validate-promo-code-alert-is-visible-when-clciking-on-special-offers;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1226062700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "validate promo code alert is visible when clciking on special offers",
  "description": "",
  "id": "products;validate-promo-code-alert-is-visible-when-clciking-on-special-offers;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I have naviagted to \"http://www.webdriveruniversity.com/Page-Object-Model/products.html\" website",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the button webdriver university site",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be presented with the a promo alert",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.webdriveruniversity.com/Page-Object-Model/products.html",
      "offset": 21
    }
  ],
  "location": "ProductsSteps.i_have_naviagted_to_website(String)"
});
formatter.result({
  "duration": 331172400,
  "status": "passed"
});
formatter.match({
  "location": "ProductsSteps.i_click_on_the_button_webdriver_university_site()"
});
formatter.result({
  "duration": 121666500,
  "status": "passed"
});
formatter.match({
  "location": "ProductsSteps.i_should_be_presented_with_the_a_promo_alert()"
});
formatter.result({
  "duration": 15543651600,
  "error_message": "java.lang.AssertionError: WebElement is NOT visible, Exception: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: //.[contains(text(),\u0027NEWCUSTOMER\u0027)]\u0027 (tried for 15 second(s) with 500 milliseconds interval)\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat base.BasePage.WaitUntilWebElementIsVisible(BasePage.java:234)\r\n\tat pageObjects.Products_Page.validateLink(Products_Page.java:45)\r\n\tat step_definitions.ProductsSteps.i_should_be_presented_with_the_a_promo_alert(ProductsSteps.java:28)\r\n\tat ✽.Then I should be presented with the a promo alert(products.feature:7)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1032502300,
  "status": "passed"
});
formatter.before({
  "duration": 1262751800,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "validate promo code alert is visible when clciking on special offers",
  "description": "",
  "id": "products;validate-promo-code-alert-is-visible-when-clciking-on-special-offers;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I have naviagted to \"http://www.webdriveruniversity.com/Page-Object-Model/products.html\" website",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the button webdriver university site",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be presented with the a promo alert",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.webdriveruniversity.com/Page-Object-Model/products.html",
      "offset": 21
    }
  ],
  "location": "ProductsSteps.i_have_naviagted_to_website(String)"
});
formatter.result({
  "duration": 390693500,
  "status": "passed"
});
formatter.match({
  "location": "ProductsSteps.i_click_on_the_button_webdriver_university_site()"
});
formatter.result({
  "duration": 107381400,
  "status": "passed"
});
formatter.match({
  "location": "ProductsSteps.i_should_be_presented_with_the_a_promo_alert()"
});
formatter.result({
  "duration": 15484426400,
  "error_message": "java.lang.AssertionError: WebElement is NOT visible, Exception: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: //.[contains(text(),\u0027NEWCUSTOMER\u0027)]\u0027 (tried for 15 second(s) with 500 milliseconds interval)\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat base.BasePage.WaitUntilWebElementIsVisible(BasePage.java:234)\r\n\tat pageObjects.Products_Page.validateLink(Products_Page.java:45)\r\n\tat step_definitions.ProductsSteps.i_should_be_presented_with_the_a_promo_alert(ProductsSteps.java:28)\r\n\tat ✽.Then I should be presented with the a promo alert(products.feature:7)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 965599900,
  "status": "passed"
});
});