const { spawnSync } = require('child_process');

spawnSync('node', ['src/app/app.js'], { stdio: 'inherit' });
