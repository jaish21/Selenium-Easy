var th = require('../../helpers/testHelper');

describe('Custom Scroll to Element', () => {
    it('should scroll using js scroller', () => {
        browser.url('');
        th.customScroll('.panel-heading');
    });
});
