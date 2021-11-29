import { AppPage } from './app.po';
import { browser,element,by } from 'protractor';

describe('Prueba 1', () => {
  let page: AppPage;

  beforeEach(() => {
    browser.get("..pages/descripcion");
  });

  it('Se muestra titulo solicitado',() => {
    expect(element(by.css("tab-selected ion-card-header")).getText()).toContain("¿Qué Buscamos?");
  })
});
