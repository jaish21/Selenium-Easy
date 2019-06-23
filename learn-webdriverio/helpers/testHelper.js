const assert = require('assert');

exports.assertDropdown = function (selector, expected, index = 0) {
  const textElements = selector.map(e => e.getText());
  assert.deepEqual(textElements, expected, 'Text do not match');
};

exports.customScroll = function (selector, n = 0) {
   browser.execute((selector, n) => {
     document.querySelectorAll(selector)[n].scrollIntoView();
  }, selector, n);
};

exports.buttonClick = function (text, selector = 'button') {
  const buttons = $$(selector);

  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].getText() === text) {
       buttons[i].click();
       break;
    }
  }
};
