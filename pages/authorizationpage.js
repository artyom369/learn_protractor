let authorizationpage = function(){

    let email_input = element(by.model('form.email'));
    let password_input = element(by.model('form.password'));
    let eye_button = element(by.css('[ng-click="showPassword = !showPassword"]'));
    let login_button = element(by.css('form[name="authForm"] button[type="submit"]'));

       
    this.enterYourEmail = function(YEmail){
        email_input.sendKeys(YEmail);
    };

    this.enterYourPassword = function(YPass){
        password_input.sendKeys(YPass);
    };

    this.eyeButtonClick = function(EyeClick){
        eye_button.click(EyeClick);
    };

    this.loginClick = function(LogClick){
        login_button.click(LogClick);
    };

    this.checkAuthPage = function(textRes){
        let verify_with_text = element(by.cssContainingText('.page-title', textRes));
        expect(verify_with_text.getText()).toEqual(textRes);
    };

    this.checkValidMessage = function(messText){
        let valid_message = element(by.cssContainingText('.noty_text', messText));
        expect(valid_message.getText()).toEqual(messText);
    };

        this.checkPassIsDisplay = function(){
        //let eye_pass_on = element(by.css('.icon icon-eye-off'));
        //expect(eye_pass_on.isPresent()).toBe(true);
        
        let check_pass = element(by.css('form[name="authForm"] input[type="text"]'));
        expect(check_pass.isPresent()).toBe(true);

    };
};

module.exports = new authorizationpage();