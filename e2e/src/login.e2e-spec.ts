import { AppPage } from './app.po';
import { browser, logging,element,by } from 'protractor';

describe('Login Test', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

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

  afterEach(async () => {
    // // Assert that there are no errors emitted from the browser
    // const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    // expect(logs).not.toContain(jasmine.objectContaining({
    //   level: logging.Level.SEVERE,
    // } as logging.Entry));
  });
});
