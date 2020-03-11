let homepage = function(){

    //let login_item = element(by.css('[ng-if="$ctrl.user.id === -1"]'));
    let login_item = element(by.css('[href="/authorize"]'));

    this.get = function(url){
        browser.get(url);
    };

    this.loginItemClick = function(LItem){
        login_item.click(LItem);

    };

    this.checkHomePage = function(){
           
    }

    

};

module.exports = new homepage();