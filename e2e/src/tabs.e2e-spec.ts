import { AppPage } from './app.po';
import { browser,element,by } from 'protractor';

describe('Prueba 2', () => {
  let page: AppPage;

  beforeEach(() => {
    browser.get("/");
  });

  it('El login se muestra titulo solicitado',() => {
    expect(element(by.css("tab-selected ion-card-title")).getText()).toContain("Inicio de Sesión");
  })
});
