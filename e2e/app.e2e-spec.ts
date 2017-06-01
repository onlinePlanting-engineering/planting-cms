import { PlantingCmsPage } from './app.po';

describe('planting-cms App', () => {
  let page: PlantingCmsPage;

  beforeEach(() => {
    page = new PlantingCmsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
