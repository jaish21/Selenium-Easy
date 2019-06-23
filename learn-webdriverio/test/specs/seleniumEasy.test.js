var th = require('../../helpers/testHelper');

describe('Navigate to selenium easy test', () => {
    it('should navigation bar', () => {
        browser.url('');

        th.assertDropdown($('.nav.navbar-nav').$$('.dropdown'), [ 'Input Forms', 'Date pickers', 'Table' ]);
        th.assertDropdown( $$('.nav.navbar-nav')[1].$$('.dropdown'), [ 'Progress Bars', 'Alerts & Modals', 'List Box', 'Others' ]);
    });
});
