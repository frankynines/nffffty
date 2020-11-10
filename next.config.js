module.exports = {

    env: {
      PINATAKEY: process.env.PINATAKEY,
      PINATASECRET: process.env.PINATASECRET,
    },

    exportTrailingSlash: true,
    exportPathMap: function() {
      return {
        '/': { page: '/' }
      };
    },
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = {
          fs: 'empty'
        }
      }
  
      return config
    }
  };