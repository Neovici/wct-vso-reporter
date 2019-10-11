module.exports = function (wct, pluginOptions) {
  wct.on('test-end', function (browser, test) {
    if (test.state !== 'failing') return;

    console.log(
      '##vso[task.logissue type=error;sourcepath='
      + test.test[0]
      + ']Test '
      + test.test.join(' » ')
      + ' failed')
  }.bind(this));
};
