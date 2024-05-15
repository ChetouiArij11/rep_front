const { Builder, By, until } = require('selenium-webdriver');

async function runTest() {
    // Initialiser le pilote du navigateur
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Charger la page de votre application Angular
        await driver.get('http://localhost:4200/acc');

        // Attendre que la page soit complètement chargée
        await driver.wait(until.elementLocated(By.css('body')));

        // Attendre que le titre de la page soit celui attendu
        await driver.wait(until.titleIs("rendezvouya acc page "), 100000); // Augmentation du délai à 20 secondes

        // Autres actions de test ici...
    } catch (error) {
        console.error('Test failed with error:', error);
    } finally {
        // Fermer le navigateur à la fin du test
        await driver.quit();
    }
}

// Exécuter le test
runTest();
