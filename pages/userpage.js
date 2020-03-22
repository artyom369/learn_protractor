const userpage = function(){

    const user_button = $('.log-box [class="btn btn-s round filled user-btn ng-binding"]');
    const drop_down_button = element(by.css('button[nc-dropdown-trigger="statusOpened"]'));
    const view_profile_item = element(by.css('[href="/user/profile"]'));
    const logout_item = element(by.css('[ng-click="$ctrl.logout()"]'));


    this.checkUserButton = function(){
        expect(user_button.isPresent()).toBe(true);
    };
    // OR
    this.checkUserButtonEmailText = function(emailText){
        expect(user_button.getText()).toEqual(emailText);
    };
    
    this.dropDownClick = function(){
        drop_down_button.click();
    };
    
    this.viewProfileItemClick = function(){
        view_profile_item.click();
    };

    this.logoutItemClick = function(){
        logout_item.click();
    };

};

module.exports = new userpage();