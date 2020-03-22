const userprofilepage = function(){

    const name_item = $('[ng-class="{disabled: activeRow !== \'name\' && activeRow !== \'all\', edit: activeRow === \'name\'}"] span[class="text ng-binding"]');
    //const name_item = element(by.css('[ng-hide="activeRow === \'name\'"]'));
    
    const email_item = $('[ng-class="{disabled: activeRow !== \'email\' && activeRow !== \'all\', edit: activeRow === \'email\'}"] span[class="text ng-binding"]');
    //const email_item = element(by.css('[ng-hide="activeRow === \'email\'"]'));
    
    const password_item = $('[ng-class="{disabled: activeRow !== \'password\' && activeRow !== \'all\', edit: activeRow === \'password\'}"] span[class="text ng-binding"]');
    //const password_item = element(by.css('[ng-hide="activeRow === \'password\'"]'));
    
    const phone_item = $('[ng-hide="activeRow === \'phone\'"]');

    const address_item = $('[ng-class="{disabled: activeRow !== \'address\' && activeRow !== \'all\', edit: activeRow === \'address\'}"] span[class="text ng-binding"]');
    //const address_item = element(by.css('[ng-hide="activeRow === \'address\'"]'));
    
    const support_pin_item = $('[ng-class="{disabled: activeRow !== \'pin\' && activeRow !== \'all\'}"] span[class="text ng-binding"]');
    //const support_pin_item = element(by.css('div[ng-class="{disabled: activeRow !== \'pin\' && activeRow !== \'all\'}"] span[class="text ng-binding"]'));
    
    const newsletter_item = $('[ng-class="{disabled: activeRow !== \'newsletter\' && activeRow !== \'all\'}"] input[name="newsletterOn"]');
    
    this.getNameValue = function(){
        return name_item.getText();
    };

    this.getEmailValue = function(){
        return email_item.getText();
    };

    this.getPasswordValue = function(){
        return password_item.getText();
    };

    this.getPhoneValue = function(){
        return phone_item.getText();
    };

    this.getAddressValue = function(){
        return address_item.getText();
    };

    this.getSupportPinValue = function(){
        return support_pin_item.getText();
    };

    this.getNewsletterValue = function(){
       return newsletter_item.isSelected();
    };
        
};

module.exports = new userprofilepage();