const assert = require('assert');

exports.openTree = function(elementText, selector = '.tree-branch a') {
  browser.waitForExist(selector);
  browser.scroll(selector);
  $$(selector).filter(e => e.getText() === elementText)[0].click();
};

exports.inputValue = function(selectorId, value) {
  const selector = `#${selectorId}`;
  browser.waitForExist(selector);
  browser.scroll(selector);

  $(selector).setValue(value);

  assert.equal($(selector).getValue(), value);
};
