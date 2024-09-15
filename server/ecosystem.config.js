module.exports = {
  apps: [
    {
      name: 'taskit',
      script: 'bun',
      args: 'run dev',
      env: {
        MODE_ENV: 'development',
      },
    },
  ],
};
