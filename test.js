!(function(global) {
  var results = document.querySelector('.results'),
      passed = 0,
      failed = 0;

  global.assert = function(statement, assertion) {
    var li = document.createElement('li'),
        type = assertion ? 'Pass' : 'Fail';
    assertion ? passed++ : failed++;
    li.className = type.toLowerCase();
    li.textContent = type + ': ' + statement;
    results.appendChild(li);
  };

  global.assert.total = function() {
    results.insertAdjacentHTML('afterend', [
      '<div class="total">Of',
      passed + failed,
      'tests,',
      failed,
      'failed,',
      passed,
      'passed.</div>'].join(' ')
    );
  };

})(this);

assert('Assert function should exist', assert);
assert('Correct assertion should pass', true);
assert('Incorrect assertion should fail', false);
assert('Empty assertion should fail');
assert.total();
