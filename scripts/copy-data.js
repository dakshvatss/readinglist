const fs = require('fs-extra');
const path = require('path');

async function copyData() {
  try {
    const src = path.join(__dirname, '..', 'data');
    const dest = path.join(__dirname, '..', 'frontend', 'dist', 'data');

    const exists = await fs.pathExists(src);
    if (!exists) {
      console.log('No data directory to copy, skipping.');
      return;
    }

    await fs.ensureDir(dest);
    await fs.copy(src, dest, { overwrite: true });
    console.log(`Copied data from ${src} -> ${dest}`);
  } catch (err) {
    console.error('Error copying data files:', err);
    process.exitCode = 1;
  }
}

copyData();
