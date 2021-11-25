const { spawnSync } = require('child_process');
const axios = require('axios');

const main = async () => {
  try {
    console.log(
      '[remove me] process.env.OPENAPI_FILE_URL',
      process.env.OPENAPI_FILE_URL,
    );
    await axios.get(process.env.OPENAPI_FILE_URL);
    spawnSync('yarn', ['run', 'bundle'], { stdio: 'inherit' });
    spawnSync('yarn', ['run', 'rename'], { stdio: 'inherit' });
    spawnSync('http-server', ['.', '-p', process.env.PORT], {
      stdio: 'inherit',
    });
  } catch (error) {
    console.log('[debug] There was an error. Reattempting in 10 seconds.');
    setTimeout(main, 10000);
  }
};

main();
