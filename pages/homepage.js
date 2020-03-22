const homepage = function(){

    //const login_item = element(by.css('[ng-if="$ctrl.user.id === -1"]'));
    const login_item = element(by.css('[href="/authorize"]'));

    this.get = function(url){
        browser.get(url);
    };

    this.loginItemClick = function(){
        login_item.click();
    };

    this.checkHomePage = function(){
        const home_page_text = $('#certs').$('[class="ssls-home-page-h1"]');
        expect(home_page_text.getText()).toEqual('Get up to 65% off on SSL');
        expect(login_item.isPresent()).toBe(true);
    }  

};

module.exports = new homepage();