var th = require('../../helpers/testHelper');
var ip = require('../../helpers/inputForms');

describe('Check all input forms', () => {
    it('should input and assert forms', () => {
        browser.url('');

        ip.openTree('Input Forms');
        ip.openTree('Simple Form Demo');

        ip.inputValue('user-message', 'Test Value');

        th.buttonClick('Show Message');
    });
});
