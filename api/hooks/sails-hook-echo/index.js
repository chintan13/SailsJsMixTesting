/**
 * Created by jaumard on 28/03/2015.
 */

module.exports = function(sails) {
  var loader = require("@nois/sails-util-mvcsloader")(sails);

  // Load policies and config from default directories
  // loader.configure();

  loader.configure(
    {
      policies: __dirname + "/api/policies", // Path to your hook's policies
      config: __dirname + "/config", // Path to your hook's config
    },
    () => {},
    () => {}
  );
  /*
        OR if you want to set custom path :

        loader.configure({
            policies: __dirname + '/api/policies', // Path to your hook's policies
            config: __dirname + '/config' // Path to your hook's config
        });

     */

  return {
    initialize: function(next) {
      // Load controllers, models & services from default directories
      // loader.adapt(err => {
      //   return next(err);
      // });
      loader.adapt(
        {
          controllers: __dirname + "/api/controllers", // Path to the controllers to load
          models: __dirname + "/api/models", // Path to the models to load
          services: __dirname + "/api/services", // Path to the services to load
          //views: __dirname + "/views",
          helpers: __dirname + "/api/helpers",
        },
        err => {
          return next(err);
        }
      );

      /*
                OR if you want to set custom path :

                loader.adapt({
                    controllers: __dirname + '/api/controllers', // Path to your hook's controllers
                    models: __dirname + '/api/models', // Path to your hook's models
                    services: __dirname + '/api/services' // Path to your hook's services
                }, function (err) {
                    return next(err);
                });

             */
    },
  };
};
