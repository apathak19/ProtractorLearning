/*
describe('login page', function(){
    it ('enter user name', function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
        element(by.id('username')).sendKeys('angular');
        element(by.id('password')).sendKeys('password');
        element(by.model('model[options.key]')).sendKeys('hello');
        element(by.css("button[class='btn btn-danger']")).click();
        browser.sleep(5000);
    });
    it('compare text and logout', function(){
        var text = element(by.xpath('/html/body/div[3]/div/div/div/p[1]'));
        expect(text.getText()).toEqual("You're logged in!!")
        element(by.xpath("/html/body/div[3]/div/div/div/p[2]/a")).click();
        browser.sleep(5000);
    });
});*/

var home_page = require("../../test/pageobjects/home_page.js");
var second_page = require("../../test/pageobjects/second_page.js");
var OR = require("../../test/utilities/locators.json");

 describe('login page', function(){

    it ('enter user name', function(){
        browser.get(OR.url);
        home_page.login();

    });

    it ('enter user name', function(){
         var text = second_page.verifyText();
         expect(text).toEqual("You're logged in!!");
         second_page.logout();
    });


 });
