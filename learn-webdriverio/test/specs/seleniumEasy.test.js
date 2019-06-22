var helperAssert = require('../../helpers/testHelper');

describe('Navigate to selenium easy test', () => {
    it('should navigation bar', () => {
        browser.url('');

        helperAssert.assertDropdown($('.nav.navbar-nav').$$('.dropdown'), [ 'Input Forms', 'Date pickers', 'Table' ]);
        helperAssert.assertDropdown( $$('.nav.navbar-nav')[1].$$('.dropdown'), [ 'Progress Bars', 'Alerts & Modals', 'List Box', 'Others' ]);
    });
});
