const { spawnSync } = require('child_process');

spawnSync('docker-compose', ['--env-file', '.env', 'build'], {
  stdio: 'inherit',
});
spawnSync('docker-compose', ['up'], { stdio: 'inherit' });
spawnSync('docker-compose', ['down'], { stdio: 'inherit' });
