var OR = require("../../test/utilities/locators.json");
var second_page = function(){
    this.verifyText = function(){
    var text = element(by.xpath(OR.locators.verifyText_field)).getText();
        return text;
    }
    this.logout = function(){
         element(by.xpath(OR.locators.logout_field)).click();
    }
}
module.exports = new second_page();