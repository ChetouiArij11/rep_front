import { browser, by, element } from 'protractor';

describe('PrendrerendezvousComponent', () => {

  beforeEach(() => {
    browser.get('/prendre-rendez-vous'); // Assurez-vous que cette URL correspond à celle de votre composant
  });

  it('should display the form elements', () => {
    expect(element(by.css('form')).isPresent()).toBeTruthy();
    expect(element(by.css('input[name="nompatient"]')).isPresent()).toBeTruthy();
    expect(element(by.css('input[name="num_tel"]')).isPresent()).toBeTruthy();
    expect(element(by.css('input[name="patient_email"]')).isPresent()).toBeTruthy();
    expect(element(by.css('input[name="date_rendezvous"]')).isPresent()).toBeTruthy();
    expect(element(by.css('input[name="motif"]')).isPresent()).toBeTruthy();
    expect(element(by.css('button[type="submit"]')).isPresent()).toBeTruthy();
  });

  it('should submit the form successfully', () => {
    element(by.css('input[name="nompatient"]'))['sendKeys']('John Doe');
    element(by.css('input[name="num_tel"]'))['sendKeys']('123456789');
    element(by.css('input[name="patient_email"]'))['sendKeys']('john@example.com');
    element(by.css('input[name="date_rendezvous"]'))['sendKeys']('2024-05-15T10:00'); // Format de date à adapter
    element(by.css('input[name="motif"]'))['sendKeys']('Consultation');
    element(by.css('button[type="submit"]'))['click']();

    // Vérifiez que le message de confirmation s'affiche
    expect(element(by.css('.mat-simple-snackbar')).isPresent()).toBeTruthy();
  });

});
