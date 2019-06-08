module.exports = {
  friendlyName: 'My clients',

  description: '',

  inputs: {},

  exits: {},

  fn: async function(inputs) {
    const client = await Client.findOne({
      id: 3
    }).populate('budgets', { select: ['name'] });
    console.log('Hey testing 22');

    var myExample = await Example.create({
      name: 'test',
      version: '1.0'
    }).fetch();
    // All done.
    return myExample;
  }
};
