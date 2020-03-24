const userprofilepage = function(){

    const nameItem = $('[ng-class="{disabled: activeRow !== \'name\' && activeRow !== \'all\', edit: activeRow === \'name\'}"] .ng-binding');
    const emailItem = $('[ng-class="{disabled: activeRow !== \'email\' && activeRow !== \'all\', edit: activeRow === \'email\'}"] .ng-binding');
    const passwordItem = $('[ng-class="{disabled: activeRow !== \'password\' && activeRow !== \'all\', edit: activeRow === \'password\'}"] .ng-binding');   
    const phoneItem = $('[ng-class*="disabled: activeRow !== \'phone\'"] .ng-binding');
    const addressItem = $('[ng-class="{disabled: activeRow !== \'address\' && activeRow !== \'all\', edit: activeRow === \'address\'}"] .ng-binding');
    const supportPinItem = $('[ng-class="{disabled: activeRow !== \'pin\' && activeRow !== \'all\'}"] .ng-binding');
    const newsletterItem = $('[ng-class="{disabled: activeRow !== \'newsletter\' && activeRow !== \'all\'}"] input[name="newsletterOn"]');
    
    this.getNameValue = function(){
        
        return nameItem.getText();
    };

    this.getEmailValue = function(){
        
        return emailItem.getText();
    };

    this.getPasswordValue = function(){
        
        return passwordItem.getText();
    };

    this.getPhoneValue = function(){
        
        return phoneItem.getText();
    };

    this.getAddressValue = function(){
        
        return addressItem.getText();
    };

    this.getSupportPinValue = function(){
        
        return supportPinItem.getText();
    };

    this.getNewsletterValue = function(){
       
        return newsletterItem.isSelected();
    };
        
};

module.exports = new userprofilepage();