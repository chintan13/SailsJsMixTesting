module.exports = {
  friendlyName: 'My clients',

  description: '',

  inputs: {},

  exits: {},

  fn: async function(inputs, exits) {
    return exits.success({ 'test-action': 'called' });
  }
};
