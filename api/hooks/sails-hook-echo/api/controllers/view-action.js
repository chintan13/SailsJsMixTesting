module.exports = {
  friendlyName: "My clients",

  description: "",

  inputs: {},

  fn: async function(inputs, exits) {
    let path = require("path");
    let viewPath = path.join(__dirname, "../../views");
    let self = this;

    sails.hooks.views._renderFn(viewPath + "/test.ejs", { name: "SAILS APP" }, function(err, compiledHtml) {
      if (err) {
        return console.log(err);
      }
      self.res.send(compiledHtml);
    });
  },
};
