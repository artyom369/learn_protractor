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

    expect(homepage.checkIsHomePage()).toBe(true);

    homepage.loginItemClick();

    // Verification that authorization page is opened
    expect(authorizationpage.checkIsAuthPage()).toBe(true);
    expect(authorizationpage.checkIsPageWithURL()).toEqual('https://www.sbzend.ssls.com/authorize');

    authorizationpage.enterYourEmail('am369test2@gmail.com');
    authorizationpage.enterYourPassword('000000');
    authorizationpage.eyeButtonClick();

    // Verification that password is displyed
    expect(authorizationpage.checkIsPassDisplay()).toBe(true);
    
    authorizationpage.loginClick();
    browser.sleep(3000);

    // Verification that error message is displayed
    expect(authorizationpage.checkIsValidMessageAppear()).toBe(true);

  });

  it('Authorization page (Welcome back!)', () => {

    browser.manage().deleteAllCookies();

    homepage.get('https://www.sbzend.ssls.com');
    
    homepage.loginItemClick();

    // Verification that authorization page is opened
    expect(authorizationpage.checkIsPageWithURL()).toEqual('https://www.sbzend.ssls.com/authorize');
    expect(authorizationpage.checkIsAuthPage()).toBe(true);
       
    authorizationpage.enterYourEmail('ssls.automation+666@gmail.com');
    authorizationpage.enterYourPassword('123456');
    authorizationpage.eyeButtonClick();

    // Verification that password is displyed
    expect(authorizationpage.checkIsPassDisplay()).toBe(true);
    
    authorizationpage.loginClick();
    
    // Verification that "Log in" button is changed on "User@email" button
    expect(userpage.checkIsUserButtonAppear()).toBe(true);
    expect(userpage.checkIsUserButtonEmailTextDisplay()).toEqual('ssls.automation+666@gmail.com');
    
    // Log out
    userpage.dropDownClick();
    userpage.logoutItemClick();
    
  });

  it('My profile page. Client area. Precondition', () => {

    browser.manage().deleteAllCookies();

    homepage.get('https://www.sbzend.ssls.com');
  
    homepage.loginItemClick();

    authorizationpage.enterYourEmail('ssls.automation+666@gmail.com');
    authorizationpage.enterYourPassword('123456');
    authorizationpage.loginClick();
    
    // To go profile 
    userpage.dropDownClick();
    userpage.viewProfileItemClick();
   
    // Save values
    profileData['name'] = userprofilepage.getNameValue();
    profileData['email'] = userprofilepage.getEmailValue();
    profileData['password'] = userprofilepage.getPasswordValue();
    profileData['phone'] = userprofilepage.getPhoneValue();
    profileData['address'] = userprofilepage.getAddressValue();
    profileData['support_pin'] = userprofilepage.getSupportPinValue();
    profileData['newsletter'] = userprofilepage.getNewsletterValue();

    // Log out
    userpage.dropDownClick();
    userpage.logoutItemClick();

  });

  it('My profile page. Client area. Test', () => {

    browser.manage().deleteAllCookies();

    homepage.get('https://www.sbzend.ssls.com');
   
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