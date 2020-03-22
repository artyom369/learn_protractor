const authorizationpage = function(){

    const email_input = element(by.model('form.email'));
    const password_input = element(by.model('form.password'));
    const eye_button = element(by.css('[ng-click="showPassword = !showPassword"]'));
    const login_button = element(by.css('form[name="authForm"] button[type="submit"]'));

       
    this.enterYourEmail = function(YourEmail){
        email_input.sendKeys(YourEmail);
    };

    this.enterYourPassword = function(YourPass){
        password_input.sendKeys(YourPass);
    };

    this.eyeButtonClick = function(){
        eye_button.click();
    };

    this.loginClick = function(){
        login_button.click();
    };

    this.checkAuthPage = function(){
        const verify_with_text = element(by.css('.page-title'));
        expect(verify_with_text.getText()).toEqual('Authorization');
    };
    // OR
    this.checkAuthPageWithURL = function(CurrUrl){
        const current_url = browser.getCurrentUrl();
        expect(current_url).toEqual(CurrUrl);
    }

    this.checkValidMessage = function(messText){
        const valid_message = element(by.cssContainingText('.noty_text', messText));
        expect(valid_message.getText()).toEqual(messText);
    };

    this.checkPassIsDisplay = function(){
        //const check_pass = element(by.css('form[name="authForm"] input[type="text"]'));
        //expect(check_pass.isPresent()).toBe(true);

        expect(password_input.getAttribute('type')).toEqual('text');
    };
};

module.exports = new authorizationpage();