let homepage = require('../pages/homepage')
let authorizationpage = require('../pages/authorizationpage');

describe('Login page', function() {
 
  it('Authorization page. Not registered user', () => {

    homepage.get('https://www.sbzend.ssls.com');

    // Verification that home page is opened

    homepage.loginItemClick();

    // Verification that authorization page is opened
    authorizationpage.checkAuthPage('Authorization');

    authorizationpage.enterYourEmail('auomtion+666@gmail.com');
    authorizationpage.enterYourPassword('000000');
    authorizationpage.eyeButtonClick();

    // Verification that password is displyed
    authorizationpage.checkPassIsDisplay();
    
    authorizationpage.loginClick();
    browser.sleep(2000);

    // Verification that error message is displayed
    authorizationpage.checkValidMessage('Uh oh! Email or password is incorrect');

    
    
  });
  
  it('Authorization page (Welcome back!)', () => {

    homepage.get('https://www.sbzend.ssls.com');
    
    // Verification that home page is opened
    
    homepage.loginItemClick();

    // Verification that authorization page is opened
    authorizationpage.checkAuthPage('Authorization');
       
    authorizationpage.enterYourEmail('ssls.automation+666@gmail.com');
    authorizationpage.enterYourPassword('123456');
    authorizationpage.eyeButtonClick();

    // Verification that password is displyed
    authorizationpage.checkPassIsDisplay();
    browser.sleep(1000);

    authorizationpage.loginClick();
    
    // Verification that "Log in" button is changed on "User@email" button
    
    browser.sleep(1000);
    
  });


});