var OR = require("../../test/utilities/locators.json");
var  home_page = function(){

        /*this.enterUserName = function(){
            element(by.id(OR.locators.username_field)).sendKeys(OR.data.username_data);
        }
        this.enterPassword = function(){
             element(by.id(OR.locators.password_field)).sendKeys(OR.data.password_data);
        }
        this.enterUser = function(){
             element(by.model(OR.locators.userDetails_field)).sendKeys(OR.data.userDetails_data);
        }
        this.clickContinue = function(){
            element(by.css(OR.locators.clickCon)).click();
        }*/
         this.login = function(){
              element(by.id(OR.locators.username_field)).sendKeys(OR.data.username_data);
              element(by.id(OR.locators.password_field)).sendKeys(OR.data.password_data);
              element(by.model(OR.locators.userDetails_field)).sendKeys(OR.data.userDetails_data);
              element(by.css(OR.locators.clickCon)).click();
         };
         };
module.exports = new home_page();