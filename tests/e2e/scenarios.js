'use strict';

describe('blog', function() {

  browser.get('/');

  describe('index', function() {

    beforeEach(function() {
      browser.get('/#/');
    });

    it('should render the post list', function() {
      expect(element.all(by.css('[ng-view] a')).first().getText()).
        toMatch(/Hello world \(again\)\!/);
    });

  });

});
