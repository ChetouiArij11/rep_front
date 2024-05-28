const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

async function runTest() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    // Ouvrir la page "http://localhost:4200/acc"
    await driver.get("http://localhost:4200/acc");

    // Attendre 5 secondes
    await driver.sleep(5000);
    await driver.get("http://localhost:4200/login");

    // Attendre que le champ email soit visible
    let emailInput = await driver.wait(
      until.elementLocated(By.id("adresse_email")),
      40000
    );
    await driver.wait(until.elementIsVisible(emailInput), 70000);
    assert.ok(await emailInput.isDisplayed(), "Le champ email est affiché");

    // Ajouter une pause pour observer l'élément email
    await driver.sleep(3000);

    // Attendre que le champ CIN soit visible
    let cinInput = await driver.wait(until.elementLocated(By.id("cin")), 40000);
    await driver.wait(until.elementIsVisible(cinInput), 70000);
    assert.ok(await cinInput.isDisplayed(), "Le champ CIN est affiché");

    // Ajouter une pause pour observer l'élément CIN
    await driver.sleep(3000);

    // Entrer les valeurs dans les champs
    await emailInput.sendKeys("arijchetoui1@gmail.com");
    await driver.sleep(1000); // Pause après avoir saisi l'email
    await cinInput.sendKeys("09724208");
    await driver.sleep(1000); // Pause après avoir saisi le CIN

    // Soumettre le formulaire
    let loginButton = await driver.findElement(By.css('button[type="submit"]'));
    await loginButton.click();

    // Ajouter une pause pour observer le clic sur le bouton de soumission
    await driver.sleep(3000);

    // Vérifier l'URL de la page de profil
    await driver.wait(until.urlIs("http://localhost:4200/profile"), 70000);

    // Ajouter une pause pour observer la page de profil
    await driver.sleep(5000);

    // Localiser le bouton "Prendre un rendez-vous cher un medecin"
    let rendezVousButton = await driver.findElement(
      By.xpath("//button[contains(text(), 'Prendre un rendez-vous cher un medecin')]")
    );

    // Assurer que le bouton est visible et cliquable
    await driver.executeScript("arguments[0].scrollIntoView(true);", rendezVousButton);
    await driver.wait(until.elementIsVisible(rendezVousButton), 70000);
    await driver.wait(until.elementIsEnabled(rendezVousButton), 70000);

    // Cliquer sur le bouton avec JavaScript pour éviter les erreurs de clic
    await driver.executeScript("arguments[0].click();", rendezVousButton);
    await driver.sleep(5000);

    // Vérifier l'URL de la page de liste des médecins
    await driver.wait(until.urlIs("http://localhost:4200/listemedecin"), 70000);

    // Ajouter une pause pour observer la page de liste des médecins
    await driver.sleep(5000);

    // Localiser le bouton "Prendre un rendez-vous" pour "Dr. Dupont"
    let prendreRendezVousButton = await driver.findElement(
      By.xpath("//h4[text()='Dr. Dupont']/following-sibling::button[contains(text(), 'Prendre un rendez-vous')]")
    );

    // Assurer que le bouton est visible et cliquable
    await driver.executeScript("arguments[0].scrollIntoView(true);", prendreRendezVousButton);
    await driver.wait(until.elementIsVisible(prendreRendezVousButton), 70000);
    await driver.wait(until.elementIsEnabled(prendreRendezVousButton), 70000);

    // Cliquer sur le bouton avec JavaScript pour éviter les erreurs de clic
    await driver.executeScript("arguments[0].click();", prendreRendezVousButton);

    // Ajouter une pause pour observer le clic sur le bouton de prise de rendez-vous
    await driver.sleep(3000);

    // Vérifier l'URL de la page de prise de rendez-vous
    await driver.wait(
      until.urlIs("http://localhost:4200/prendre-rendezvous/3"),
      70000
    );

    // Remplir et soumettre le formulaire de prise de rendez-vous
    await driver.findElement(By.id("nompatient")).sendKeys("ali");
    await driver.findElement(By.id("num_tel")).sendKeys("55555555");
    await driver.findElement(By.id("patient_email")).sendKeys("ali@gmail.com");
    await driver
      .findElement(By.id("date_rendezvous"))
      .sendKeys("2024-06-01T10:00"); // Date et heure souhaitées
    await driver
      .findElement(By.id("motif"))
      .sendKeys("Motif de la consultation");
    let confirmButton = await driver.findElement(
      By.xpath("//input[@value='Confirmez votre rendez-vous']")
    );
    await confirmButton.click();
    // Ajouter une pause pour observer le clic sur le bouton de prise de rendez-vous
    await driver.sleep(5000);
    console.log(
      "Le test de connexion et l'action de prise de rendez-vous ont réussi !"
    );
  } catch (error) {
    console.error("Le test a échoué avec l'erreur:", error);
  } finally {
    await driver.quit();
  }
}

runTest();
