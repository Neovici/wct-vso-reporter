const { logIssue, IssueType } = require("azure-pipelines-task-lib");

module.exports = function (wct, pluginOptions) {
  wct.on('test-end', function (browser, test) {
    if (test.state !== 'failing') return;

    logIssue(IssueType.Error, `Test ${test.test.join(' » ')} failed.`)
  }.bind(this));
};
