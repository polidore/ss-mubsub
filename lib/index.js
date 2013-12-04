var mubsub = require('mubsub');

module.exports = function(config) {
  if(!config) {
    config = {};
  }

  var host = config.host || '127.0.0.1';
  var port = config.port || 27017;
  var db = config.db || 'example';
  var options = config.options || {};
  var uri = "mongodb://" + host + ":" + port + "/" + db;

  var client = mubsub(uri,options);
  var channel = client.channel('ssevent', {max:500});

  return {
    listen: function(cb) {
      channel.subscribe('ss', function(msg) {
        if(!msg) {
          throw 'Null message';
        }
        cb(msg);
      });
    },
    send: function(msg) {
      if(!msg) {
        throw "Cannot publish null message"
      }
      channel.publish('ss', msg);
    }
  };
};
