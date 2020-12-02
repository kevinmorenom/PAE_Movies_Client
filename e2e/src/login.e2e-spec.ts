import { AppPage } from './app.po';
import { browser, logging,element,by } from 'protractor';

describe('Login Test', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  //Loggin error
  it('It should show the login error', () => {
    page.navigateTo();

    const emailInput=element(by.id('inputLogin email'));
    const passwordInput=element(by.id('inputLogin password'));
    const submitBtn=element(by.id('loginbtn'));
    emailInput.sendKeys('Alex@iteso.mx');
    passwordInput.sendKeys('123453');

    submitBtn.click();
    let message = element(by.id('loginNegativo'));
    browser.wait(()=>{
        return message.getText();
    },6000);
    expect(message.getText()).toEqual('CREDENCIALES INVALIDAS');
  });

  //Login success
  it('It should show the login success', () => {
    browser.waitForAngularEnabled(false);
    page.navigateTo();

    const emailInput=element(by.id('inputLogin email'));
    const passwordInput=element(by.id('inputLogin password'));
    const submitBtn=element(by.id('loginbtn'));

    emailInput.sendKeys('Alex@iteso.mx');
    passwordInput.sendKeys('123456');

    submitBtn.click();

    browser.sleep(5000);
    
    expect(element(by.className('homePage')).isPresent());
    // expect(1).toEqual(1);

    const profileBtn=element(by.className('profile'))
    profileBtn.click();

    browser.sleep(5000);



  });

  afterEach(async () => {
    // // Assert that there are no errors emitted from the browser
    // const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    // expect(logs).not.toContain(jasmine.objectContaining({
    //   level: logging.Level.SEVERE,
    // } as logging.Entry));
  });
});
