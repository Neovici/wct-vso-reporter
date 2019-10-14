const { logIssue, IssueType } = require("azure-pipelines-task-lib");

module.exports = function (wct, pluginOptions) {
  wct.on('test-end', function (browser, test) {
    if (test.state !== 'failing') return;
    
    const file = test.test.splice(0, 1);
    logIssue(IssueType.Error, `Test ${test.test.join(' » ')} failed.`, file);
  }.bind(this));
};
