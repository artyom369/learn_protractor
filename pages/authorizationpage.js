const authorizationpage = function(){

    const emailInput = element(by.model('form.email'));
    const passwordInput = element(by.model('form.password'));
    const eyeButton = $('[ng-click="showPassword = !showPassword"]');
    const loginButton = $('form[name="authForm"] button[type="submit"]');

       
    this.enterYourEmail = function(YourEmail){
        emailInput.sendKeys(YourEmail);
    };

    this.enterYourPassword = function(YourPass){
        passwordInput.sendKeys(YourPass);
    };

    this.eyeButtonClick = function(){
        eyeButton.click();
    };

    this.loginClick = function(){
        loginButton.click();
    };

    this.checkIsAuthPage = function(){
        const verifyWithText = element(by.css('.page-title'));
        expect(verifyWithText.getText()).toEqual('Authorization');
        //OR
        expect(loginButton.isPresent()).toBe(true);
    };
    // OR
    this.checkIsAuthPageWithURL = function(CurrUrl){
        const currentUrl = browser.getCurrentUrl();
        expect(currentUrl).toEqual(CurrUrl);
    };

    this.checkIsValidMessageAppear = function(messText){
        const validMessage = element(by.cssContainingText('.noty_text', messText));
        expect(validMessage.getText()).toEqual(messText);
    };

    this.checkIsPassDisplay = function(){
        expect(passwordInput.getAttribute('type')).toEqual('text');
    };
};

module.exports = new authorizationpage();