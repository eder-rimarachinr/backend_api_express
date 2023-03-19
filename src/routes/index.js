const express = require('express');
const fs = require('fs/promises');
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
  return fileName.split('.').shift();
};

const loadRoutes = async () => {
  try {
    const files = await fs.readdir(PATH_ROUTES);
    files.forEach((file) => {
      const name = removeExtension(file);
      if (name !== 'index') {
        router.use(`/${name}`, require(`./${name}`));
      }
    });
    console.log('Routes loaded successfully');
  } catch (error) {
    console.error(`Error loading routes: ${error.message}`);
  }
};

loadRoutes();

module.exports = router;
