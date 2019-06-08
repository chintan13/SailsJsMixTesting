module.exports = {
  friendlyName: "Is connected helper",

  description: "",

  inputs: {
    socketRoomName: {
      type: "string",
      required: true,
    },
  },

  exits: {
    success: {
      description: "All done.",
    },
  },

  fn: async function(inputs, exits) {
    sails.io.in(inputs.socketRoomName).clients(async (err, clients) => {
      if (clients && Array.isArray(clients) && clients.length > 0) exits.success(true);
      else exits.success(false);
    });
  },
};
