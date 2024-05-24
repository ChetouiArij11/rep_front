const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

async function runTest() {
    // Initialiser le pilote du navigateur
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Charger la page de votre application Angular
        await driver.get('http://localhost:4200/acc');

        // Attendre que la page soit complètement chargée
        await driver.wait(until.elementLocated(By.css('body')), 10000);

        // Vérifier le titre de la page
        await driver.wait(until.titleIs("rendezvouya acc page"), 20000);

        // Vérifier la présence de la bannière de rendez-vous
        let recordsBanner = await driver.findElement(By.css('.records-banner'));
        assert.ok(await recordsBanner.isDisplayed(), "La bannière de rendez-vous est affichée");

        // Vérifier le texte de la bannière de rendez-vous
        let bannerText = await driver.findElement(By.css('.records-banner h1')).getText();
        assert.strictEqual(bannerText, "Prenez rapidement un rendez-vous avec votre médecin !");

        // Vérifier la présence des éléments de la section articles
        let articlesSection = await driver.findElement(By.css('.articles'));
        assert.ok(await articlesSection.isDisplayed(), "La section articles est affichée");

        // Vérifier les titres de la section articles
        let articleTitle = await driver.findElement(By.css('.articles h1')).getText();
        assert.strictEqual(articleTitle, "Pourquoi prendre rendez-vous avec Rendez-vouya.tn?");

        let articleSubtitle = await driver.findElement(By.css('.articles h3')).getText();
        assert.strictEqual(articleSubtitle, "Avec Rendez-vouya, prenez rendez-vous en ligne avec votre médecin autrement");

        // Vérifier la présence des cartes dans la section articles
        let cards = await driver.findElements(By.css('.card-mini'));
        assert.strictEqual(cards.length, 3, "Il y a trois cartes dans la section articles");

        // Vérifier la présence de la bannière des slides
        let slidesBanner = await driver.findElement(By.css('.slides-banner'));
        assert.ok(await slidesBanner.isDisplayed(), "La bannière des slides est affichée");

        // Vérifier la présence de l'image dans la bannière des slides
        let slidesImg = await driver.findElement(By.css('.slides-img img'));
        assert.ok(await slidesImg.isDisplayed(), "L'image dans la bannière des slides est affichée");

        // Vérifier la présence des informations de confiance
        let trustInfo = await driver.findElement(By.css('.trust-info'));
        assert.ok(await trustInfo.isDisplayed(), "Les informations de confiance sont affichées");

        // Vérifier la présence de la section des statistiques
        let statsSection = await driver.findElement(By.css('.records-banner:last-child .trust-info'));
        assert.ok(await statsSection.isDisplayed(), "La section des statistiques est affichée");

        console.log("Tous les tests ont réussi !");
    } catch (error) {
        console.error('Le test a échoué avec l\'erreur:', error);
    } finally {
        // Fermer le navigateur à la fin du test
        await driver.quit();
    }
}

// Exécuter le test
runTest();
