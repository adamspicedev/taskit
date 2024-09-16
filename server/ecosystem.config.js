module.exports = {
  apps: [
    {
      name: 'taskit',
      script: 'nom',
      args: 'run start:prod',
      env: {
        MODE_ENV: 'production',
      },
    },
  ],
};
