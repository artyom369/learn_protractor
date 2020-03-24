const userpage = function(){

    const userButton = $('.log-box [class="btn btn-s round filled user-btn ng-binding"]');
    const dropDownButton = $('button[nc-dropdown-trigger="statusOpened"]');
    const viewProfileItem = $('[href="/user/profile"]');
    const logoutItem = $('[ng-click="$ctrl.logout()"]');


    this.checkIsUserButtonAppear = function(){
        
        return userButton.isPresent();
    };
    // OR
    this.checkIsUserButtonEmailTextDisplay = function(){
        
        return userButton.getText();
    };
    
    this.dropDownClick = function(){
        
        dropDownButton.click();
    };
    
    this.viewProfileItemClick = function(){
       
        viewProfileItem.click();
    };

    this.logoutItemClick = function(){
        
        logoutItem.click();
    };

};

module.exports = new userpage();