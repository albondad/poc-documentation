const { spawnSync } = require('child_process');

spawnSync('redoc-cli', ['bundle', process.env.OPENAPI_FILE_URL], {
  stdio: 'inherit',
});
