/**
 * Created by jaumard on 12/05/2015.
 */
module.exports.routes = {
  'GET /test': 'ExampleController.test',
  'GET /test-action': { action: 'test-action' },
  'GET /view-test': { view: 'test' },
};
