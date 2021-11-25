const fs = require('fs');

const callback = (error) => {
  if (error) {
    console.log('[debug] there was an error when renaming the file');
  } else {
    console.log('[debug] renaming the file was successful');
  }
};

fs.rename('redoc-static.html', 'index.html', callback);
