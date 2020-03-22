const homepage = require('../pages/homepage')
const authorizationpage = require('../pages/authorizationpage');
const userpage = require('../pages/userpage');
const userprofilepage = require('../pages/userprofilepage');

const profileData = {};

describe('tests for Login and Profile pages', function() {

  it('Authorization page. Not registered user', () => {
    
    browser.manage().deleteAllCookies();

    homepage.get('https://www.sbzend.ssls.com');
    browser.sleep(1000);
    homepage.checkIsHomePage();

    homepage.loginItemClick();

    // Verification that authorization page is opened
    authorizationpage.checkIsAuthPage();

    authorizationpage.enterYourEmail('am369test2@gmail.com');
    authorizationpage.enterYourPassword('000000');
    authorizationpage.eyeButtonClick();

    // Verification that password is displyed
    authorizationpage.checkIsPassDisplay();
    
    authorizationpage.loginClick();
    browser.sleep(2000);

    // Verification that error message is displayed
    authorizationpage.checkIsValidMessageAppear('Uh oh! Email or password is incorrect');

  });

  it('Authorization page (Welcome back!)', () => {

    browser.manage().deleteAllCookies();

    homepage.get('https://www.sbzend.ssls.com');
    browser.sleep(1000);
    
    homepage.loginItemClick();

    // Verification that authorization page is opened
    authorizationpage.checkIsAuthPageWithURL('https://www.sbzend.ssls.com/authorize');
    authorizationpage.checkIsAuthPage();
       
    authorizationpage.enterYourEmail('ssls.automation+666@gmail.com');
    authorizationpage.enterYourPassword('123456');
    authorizationpage.eyeButtonClick();

    // Verification that password is displyed
    authorizationpage.checkIsPassDisplay();
    browser.sleep(1000);

    authorizationpage.loginClick();
    
    // Verification that "Log in" button is changed on "User@email" button
    userpage.checkIsUserButtonAppear();
    userpage.checkIsUserButtonEmailTextDisplay('ssls.automation+666@gmail.com');
    
    userpage.dropDownClick();
    browser.sleep(1000); 
    
    userpage.logoutItemClick();
    
  });

  it('My profile page. Client area. Precondition', () => {

    browser.manage().deleteAllCookies();

    homepage.get('https://www.sbzend.ssls.com');
    browser.sleep(1000);
      
    homepage.loginItemClick();

    authorizationpage.enterYourEmail('ssls.automation+666@gmail.com');
    authorizationpage.enterYourPassword('123456');
    authorizationpage.loginClick();
    
    // To go profile 
    userpage.dropDownClick();
    userpage.viewProfileItemClick();
    browser.sleep(500);
    
    // Save values
    profileData['name'] = userprofilepage.getNameValue();
    profileData['email'] = userprofilepage.getEmailValue();
    profileData['password'] = userprofilepage.getPasswordValue();
    profileData['phone'] = userprofilepage.getPhoneValue();
    profileData['address'] = userprofilepage.getAddressValue();
    profileData['support_pin'] = userprofilepage.getSupportPinValue();
    profileData['newsletter'] = userprofilepage.getNewsletterValue();


    userpage.dropDownClick();
    userpage.logoutItemClick();

  });

  it('My profile page. Client area. Test', () => {

    browser.manage().deleteAllCookies();

    homepage.get('https://www.sbzend.ssls.com');
    browser.sleep(1000);
               
    homepage.loginItemClick();

    authorizationpage.enterYourEmail('ssls.automation+666@gmail.com');
    authorizationpage.enterYourPassword('123456');
    authorizationpage.loginClick();

    // To go profile
    userpage.dropDownClick();
    userpage.viewProfileItemClick();
    
    // Compare Values
    expect(profileData['name']).toEqual(userprofilepage.getNameValue());
    expect(profileData['email']).toEqual(userprofilepage.getEmailValue());
    expect(profileData['password']).toEqual(userprofilepage.getPasswordValue());
    expect(profileData['phone']).toEqual(userprofilepage.getPhoneValue());
    expect(profileData['address']).toEqual(userprofilepage.getAddressValue());
    expect(profileData['support_pin']).toEqual(userprofilepage.getSupportPinValue());
    expect(profileData['newsletter']).toEqual(userprofilepage.getNewsletterValue());

  });

});