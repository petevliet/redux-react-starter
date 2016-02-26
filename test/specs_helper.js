module.exports = {
  environment: function () {
    return {
      port: process.env.VCAP_APP_PORT || "3000",
      host: process.env.VCAP_APP_HOST || "localhost"
    };
  },

  domain: function() {
    var env = this.environment();

    return "http://" + env.host + ":" + env.port;
  }
};
