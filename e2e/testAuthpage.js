const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

async function runTest() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://localhost:4200/login');

        // Attendre que le champ email soit visible
        let emailInput = await driver.wait(until.elementLocated(By.id('adresse_email')), 40000);
        await driver.wait(until.elementIsVisible(emailInput), 70000);
        assert.ok(await emailInput.isDisplayed(), "Le champ email est affiché");

        // Ajouter une pause pour observer l'élément email
        await driver.sleep(3000);

        // Attendre que le champ CIN soit visible
        let cinInput = await driver.wait(until.elementLocated(By.id('cin')), 40000);
        await driver.wait(until.elementIsVisible(cinInput), 70000);
        assert.ok(await cinInput.isDisplayed(), "Le champ CIN est affiché");

        // Ajouter une pause pour observer l'élément CIN
        await driver.sleep(3000);

        // Entrer les valeurs dans les champs
        await emailInput.sendKeys('arijchetoui1@gmail.com');
        await driver.sleep(1000); // Pause après avoir saisi l'email
        await cinInput.sendKeys('09724208');
        await driver.sleep(1000); // Pause après avoir saisi le CIN

        // Soumettre le formulaire
        let loginButton = await driver.findElement(By.css('button[type="submit"]'));
        await loginButton.click();

        // Ajouter une pause pour observer le clic sur le bouton de soumission
        await driver.sleep(3000);

        // Vérifier l'URL de la page de profil
        await driver.wait(until.urlIs('http://localhost:4200/profile'), 70000);

        // Ajouter une pause pour observer la page de profil
        await driver.sleep(5000);

        console.log("Le test de connexion a réussi !");
    } catch (error) {
        console.error('Le test a échoué avec l\'erreur:', error);
    } finally {
        await driver.quit();
    }
}

runTest();
