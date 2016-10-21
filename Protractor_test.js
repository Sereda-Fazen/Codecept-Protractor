
Feature('Shelf configuration');

Scenario('home page', (I, ProtractorPage) => {
    ProtractorPage.home();
});

    Scenario('hover to personalize', (I, ProtractorPage) => {
        ProtractorPage.hoverPersonalize();
    });
    Scenario('go to shelves', (I, ProtractorPage) => {
        ProtractorPage.checkShelves();
    });
    Scenario('price default', (I, ProtractorPage) => {
        ProtractorPage.priceDefault();
    });
    Scenario('check height list', (I, ProtractorPage) => {
        ProtractorPage.checkHeightList();
    });
    Scenario('price changes after height', (I, ProtractorPage) => {
        ProtractorPage.priceChangesAfterHeight();
    });
    Scenario('check width list', (I, ProtractorPage) => {
        ProtractorPage.checkWidthList();
    });
    Scenario('price changes after width', (I, ProtractorPage) => {
        ProtractorPage.priceChangesAfterWidth();
    });

    Scenario('board tab', (I, ProtractorPage) => {
        ProtractorPage.boardTab();
    });
    Scenario('check configuration boards', (I, ProtractorPage) => {
        ProtractorPage.checkConfigurationBoards();
    });

    Scenario('colours tab', (I, ProtractorPage) => {
        ProtractorPage.coloursTab();
    });
    Scenario('review tab', (I, ProtractorPage) => {
        ProtractorPage.reviewTab();
    });

