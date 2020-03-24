const authorizationpage = function(){

    const emailInput = element(by.model('form.email'));
    const passwordInputVisible = $('[type="text"][name="password"]');
    const passwordInput = $('[type="password"][name="password"]');
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
        
        const authForm = $('form[name="authForm"]');
        return authForm.isPresent();
    };
    
    this.checkIsPageWithURL = function(CurrUrl){
        
        const currentURL = browser.getCurrentUrl(CurrUrl);
        return currentURL;
    };

    this.checkIsValidMessageAppear = function(){
        
        const validMessage = element(by.cssContainingText('#noty_topCenter_layout_container .noty_text', 'Uh oh! Email or password is incorrect'));
        return validMessage.isPresent();
    };

    this.checkIsPassDisplay = function(){
        
        return passwordInputVisible.isPresent();
        
    };
};

module.exports = new authorizationpage();