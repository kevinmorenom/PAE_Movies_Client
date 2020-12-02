import { AppPage } from './app.po';
import { browser, logging,element,by } from 'protractor';

describe('Movies Test', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  //Movie grid shown
  it('It should show the profile Info', () => {
    browser.waitForAngularEnabled(false);
    page.navigateTo();

    browser.sleep(5000);
    expect(element(by.className('profileInfo')).isPresent());
    // expect(1).toEqual(1);

  });

  //Movie Card shown
  it('It should show the movie list', () => {
    browser.waitForAngularEnabled(false);
    page.navigateTo();

    browser.sleep(5000);
    expect(element(by.className('movieLists')).isPresent());
    // expect(1).toEqual(1);

  });



  afterEach(async () => {
    // // Assert that there are no errors emitted from the browser
    // const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    // expect(logs).not.toContain(jasmine.objectContaining({
    //   level: logging.Level.SEVERE,
    // } as logging.Entry));
  });
});
