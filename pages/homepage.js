const homepage = function(){

    const loginItem = $('[href="/authorize"]');
    

    this.get = function(url){
        
        browser.get(url);
    };

    this.loginItemClick = function(){
        
        loginItem.click();
    };

    this.checkIsHomePage = function(){
        
        const homePageText = element(by.cssContainingText('#certs .ssls-home-page-h1', 'Get up to 65% off on SSL'));
        return loginItem.isPresent() && homePageText.isPresent();
        
    };  

};

module.exports = new homepage();