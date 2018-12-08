module.exports = {
  apps : [{
    name: 'graphql-typescript-boilerpate',
    script: 'dist/index.js',
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'production'
    }
  }]
};
