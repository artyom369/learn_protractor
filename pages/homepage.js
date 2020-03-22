const homepage = function(){

    const loginItem = $('[href="/authorize"]');

    this.get = function(url){
        browser.get(url);
    };

    this.loginItemClick = function(){
        loginItem.click();
    };

    this.checkIsHomePage = function(){
        const homePageText = $('#certs .ssls-home-page-h1');
        expect(homePageText.getText()).toEqual('Get up to 65% off on SSL');
        
        expect(loginItem.isPresent()).toBe(true);
    }  

};

module.exports = new homepage();