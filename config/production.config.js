
/////////////////////////////////////////////////////////////////////
// PRODUCTION configuration
//
/////////////////////////////////////////////////////////////////////
const HOST_URL = 'https://visual-reports.autodesk.io'
const PORT= 443

const config = {

  env: 'production',

  client: {
    // this the public host name of your server for the
    // client socket to connect.
    // eg. https://myforgeapp.mydomain.com
    host: `${HOST_URL}`,
    env: 'production',
    port: PORT
    
  },

  forge: {

    oauth: {
      clientSecret: process.env.FORGE_CLIENT_SECRET,
      clientId: process.env.FORGE_CLIENT_ID,

      redirectUri: `${HOST_URL}/api/forge/callback/oauth`,
      authenticationUri: '/authentication/v1/authenticate',
      refreshTokenUri: '/authentication/v1/refreshtoken',
      authorizationUri: '/authentication/v1/authorize',
      accessTokenUri: '/authentication/v1/gettoken',
      baseUri: 'https://developer.api.autodesk.com',

      scope: [
        'data:read',
        'data:create',
        'data:write',
        'bucket:read',
        'bucket:create'
      ]
    },

    viewer: {
      viewer3D: 'https://developer.api.autodesk.com/viewingservice/v1/viewers/viewer3D.min.js?v=2.15',
      threeJS:  'https://developer.api.autodesk.com/viewingservice/v1/viewers/three.min.js?v=2.15',
      style:    'https://developer.api.autodesk.com/viewingservice/v1/viewers/style.min.css?v=2.15'
    }
  }
}

module.exports = config


