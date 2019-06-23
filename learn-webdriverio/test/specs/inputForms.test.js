var th = require('../../helpers/testHelper');
var ip = require('../../helpers/inputForms');
const assert = require('assert');

describe('Check all input forms', () => {
    it('should input text and assert forms', () => {
        browser.url('');

        ip.openTree('Input Forms');
        ip.openTree('Simple Form Demo');

        ip.inputValue('user-message', 'Test Value');

        th.buttonClick('Show Message');
    });

    it('should input check box and assert forms', () => {
        browser.url('');

        ip.openTree('Input Forms');
        ip.openTree('Checkbox Demo');

        ip.checkBox('isAgeSelected');

        browser.waitForExist('#txtAge');
        assert.equal($('#txtAge').getText(), 'Success - Check box is checked');
    });
});
