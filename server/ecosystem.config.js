module.exports = {
  apps: [
    {
      name: 'taskit',
      script: 'npm',
      args: 'run start:prod',
      env: {
        MODE_ENV: 'production',
      },
    },
  ],
};
