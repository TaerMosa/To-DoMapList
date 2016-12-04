import { ToDoMapListPage } from './app.po';

describe('to-do-map-list App', function() {
  let page: ToDoMapListPage;

  beforeEach(() => {
    page = new ToDoMapListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
