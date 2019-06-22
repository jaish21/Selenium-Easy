const assert = require('assert');

exports.assertDropdown = function(selector, expected, index = 0) {
  const textElements = selector.map(e => e.getText());
  assert.deepEqual(textElements, expected, 'Text do not match');
};
