
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },

  homePage: '/',
  waitShelves: '[ng-href="/shelf/configurator"]',

  sizeList: '[ng-show="dropdownCtrl.isOpen"]',
  price: '[class="product-info-shelf"]',

  configBoard: '[class="overlay-button__icon ng-scope"]',
  cancel: '[uib-tooltip="Clear current selection"]',
  apply: '[uib-tooltip="Apply modification"]',

  nextConfigBoard: 'div.shelf-boards-tab > mx-component-overlay:nth-of-type(2) > div > div:nth-of-type(1) > mx-overlay-button > div > div > svg',
  coloursBoard: '[uib-tooltip-template-transclude="contentExp()"]',
  dropDownColor: '[class="dropdown-color-picker ng-scope ng-isolate-scope"]',
  selectColor: '[class="icon-button icon-button--vertical icon-button--square"]',

  iconColor: '[class="icon-button icon-button--vertical icon-button--square icon-button--no-border  "]',
  componentOverlay: '[class="component-overlay__item ng-scope"]',
  explanatoryLine: '[class="explanatory-line"]',

  firstBorder: 'div > div:nth-of-type(1) > mx-overlay-button > div > div > svg > circle',
  secondBorder: 'div > div:nth-of-type(2) > mx-overlay-button > div > div > svg > circle',

  waitColours: '[class="tabs clearfix ng-scope"]',

  assemblyService: 'class="mx-checkbox__label ng-binding"',
  backWalls: '[ng-if="!$ctrl.disable"]',

    checkboxAssembly: '[for="checkbox-assembly-service"]',
    checkboxBackWalls: '[for="checkbox-shelf-backwalls"]',

    save: '[class="icon-button icon-button--vertical icon-button--square icon-button--white"]',
    accountPanel: '[class="account panel"]',
    fillEmail: '[class="input-wrapper__input  ng-empty ng-invalid ng-invalid-required ng-valid-pattern ng-valid-minlength ng-valid-maxlength input-wrapper__input--required ng-valid-email"]',
    buttonSend: '[class="button__text "]',

  home(){
    I.resizeWindow(1920, 1080);
    I.amOnPage(this.homePage);
  },

  hoverPersonalize()
  {
    I.hoverToPersonalize();
  },

  checkShelves(){
    I.waitForElement(this.waitShelves);
    I.shelves();
  },

  priceDefault(){
    I.waitForElement(this.sizeList);
    I.waitForText('£843');
    I.see('£843',this.price);
    I.saveScreenshot('price.png');
  },

  checkHeightList(){
    I.heightList();
  },

  priceChangesAfterHeight(){
    I.waitForElement(this.price, 10);
    I.waitForText('£968', 10);
    I.see('£968', this.price);
  },

  checkWidthList(){
    I.weightList();
  },

  priceChangesAfterWidth(){
    I.waitForElement(this.price, 10);
    I.waitForText('£1,272', 10);
    I.see('£1,272', this.price);
  },

    /**
     * Board
     */
    boardTab(){

    I.boards();
    I.waitForText('Tap to add or remove boards');
    },

    checkConfigurationBoards(){
    
    I.click(this.configBoard);

    I.waitForElement(this.cancel);
    I.click(this.cancel);
    I.waitForText('Tap to add or remove boards');

    I.click(this.configBoard);
    I.waitForElement(this.apply);
    I.click(this.apply);
    I.waitForText('Tap to add or remove boards');

    I.waitForElement(this.price, 10);
    I.waitForText('£1,261', 10);
    I.see('£1,261', this.price);
    I.saveScreenshot('price2.png');

    I.click(this.nextConfigBoard);
    I.waitForElement(this.apply);
    I.click(this.apply);

    I.waitForElement(this.price, 10);
    I.waitForText('£1,272', 10);
    I.see('£1,272', this.price);
    I.saveScreenshot('price3.png');
  },

    /**
     * Front Panel
     */
    /*
     I.frontPanel();
     I.waitForElement('[icon-name="shelf-drawer"]');
     I.drawer();
     */

    // I.canvasPage();


    /**
     * Colours
     */

    coloursTab(){

      I.waitForElement(this.waitColours);
      I.colours();
      I.waitForElement(this.coloursBoard);

       I.boardsColours();
       I.waitForElement(this.dropDownColor);
       I.clickColor();
       I.see('Oak', this.selectColor);

       I.boardsColoursSlide();
       I.waitForElement(this.iconColor);
       I.click(this.iconColor);

       I.waitForElement(this.componentOverlay);
       I.click(this.componentOverlay);
       I.waitForElement(this.explanatoryLine);
       I.see('Oak', this.explanatoryLine);
       I.see('Apply', this.explanatoryLine);
       I.see('Cancel', this.explanatoryLine);
       I.click(this.cancel);

       I.click(this.firstBorder);
       I.click(this.secondBorder);
       I.waitForElement(this.explanatoryLine);
       I.see('You are coloring 2 Boards', this.explanatoryLine);

       I.waitForElement(this.apply);
       I.click(this.apply);
       I.waitForText('£1,275', 10);
       I.see('£1,275', this.price);
       I.saveScreenshot('price4.png');
       },

       /**
       * Review
       */


       reviewTab(){
       I.review();
       I.waitForElement(this.explanatoryLine);
       //I.see(this.explanatoryLine);
       I.click(this.checkboxAssembly);


       I.waitForText('£1,751', 10);
       I.see('£1,751', this.price);

       I.click(this.checkboxBackWalls);

       I.waitForText('£2,127', 10);
       I.see('£2,127', this.price);
       I.saveScreenshot('price5.png');


       //save

       I.waitForElement(this.save);
       I.click(this.save);
       I.waitForElement(this.accountPanel);

       I.fillField(this.fillEmail, 'test@mail.ru');
       I.waitForElement(this.buttonSend);
       }












       // I.click('[class="button__text "]');

       //I.waitForElement('[ng-bind-html="notification.msg"]');
       // I.waitForElement('Check your inbox!');
       // I.see('A link to your design has been sent to your email address. Check your inbox!','[ng-bind-html="notification.msg"]');
       /*
       I.waitForElement('[class="header-menu__nav-right-container"]',20);
       I.click('[class="header-menu__nav-right-container"]');
       I.waitForElement('[class="image-preview__img"]');
       */






  // insert your locators and methods here
};
