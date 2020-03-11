let userpage = function(){

    let user_button = element(by.css('[href="/user/bundles"]'));
    let drop_down_button = element(by.css('.btn btn-s round filled dropdown-btn ng-isolate-scope'));
    let view_profile_item = element(by.css('[href="/user/profile"]'));

    this.checkUserButton = function(){
        expect(user_button.isPresent()).toBe(true);
    }
    // OR
    this.checkUserButtonEmailText = function(emailText){
        let user_button_email = element(by.cssContainingText('[href="/user/bundles"]', emailText));
        expect(user_button_email.getText()).toEqual(emailText);
    }

    this.dropDownClick = function(ButClick){
        drop_down_button.click(ButClick);
    }

    this.viewItemClick = function(itemClick){
        view_profile_item.click(itemClick);
        console.log('423423423423');
    }

// return {
//         viewItemClick() {
//             view_profile_item.click(itemClick);
//         },
//         dropDownClick() {

//         }

//     }
};