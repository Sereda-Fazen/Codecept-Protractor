
'use strict';

let Helper = codecept_helper;

class pr_helper extends Helper {


  hoverToPersonalize() {
   let browser = this.helpers['Protractor'].browser;
   return browser.actions().mouseMove(browser.findElement(by.css('[ng-href="/configurator"]'))).perform();
  };

  shelves(){
    let browser = this.helpers['Protractor'].browser;
    return browser.element(by.cssContainingText('[ng-href="/shelf/configurator"]','Shelves')).click();
  }
  heightList(){
      let browser = this.helpers['Protractor'].browser;
      browser.element(by.css('[placeholder="H"]')).click();
        return browser.element(by.cssContainingText('[ng-repeat="option in dropdownCtrl.options"]', '271 cm')).click();
    }

    weightList(){
        let browser = this.helpers['Protractor'].browser;
        browser.element(by.css('[placeholder="W"]')).click();
        return browser.element(by.cssContainingText('[ng-repeat="option in dropdownCtrl.options"]', '307 cm')).click();
    }

    boards(){
        let browser = this.helpers['Protractor'].browser;
        return browser.element(by.cssContainingText('[class="tabs clearfix ng-scope"]', 'Boards')).click();
    }
/*
    frontPanel() {
        let browser = this.helpers['Protractor'].browser;
        browser.element(by.cssContainingText('[class="tabs clearfix ng-scope"]', 'Front Panels')).click();
    }
    drawer(){
        let browser = this.helpers['Protractor'].browser;
        return browser.element(by.cssContainingText('[icon-name="shelf-drawer"]', 'Drawer')).click();
    }
    /*
    canvasPage(){
        let browser = this.helpers['Protractor'].browser;
        return browser.actions().mouseMove(by.xpath('//*[@class="component-overlay"]/div[1]')).click();
    }
*/
    colours() {
        let browser = this.helpers['Protractor'].browser;
        browser.element(by.cssContainingText('[class="tabs clearfix ng-scope"]', 'Colours')).click();
    }
    boardsColours(){
        let browser = this.helpers['Protractor'].browser;
        return browser.element(by.cssContainingText('[class="popover-content"]', 'Boards')).click();
    }

    boardsColoursSlide(){
        let browser = this.helpers['Protractor'].browser;
        return browser.element(by.cssContainingText('[class="explanatory-line"]', 'Sides')).click();
    }

    clickColor(){
        let browser = this.helpers['Protractor'].browser;
        return browser.element(by.cssContainingText('[classes="icon-button--vertical icon-button--bigsquare icon-button--no-border"]', 'Oak')).click();
    }


    review() {
        let browser = this.helpers['Protractor'].browser;
        browser.element(by.cssContainingText('[class="tabs clearfix ng-scope"]', 'Review')).click();
    }
    



  
}

module.exports = pr_helper;
