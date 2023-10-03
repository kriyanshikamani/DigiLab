const express = require('express');

const bookpackageController = require('../controllers/bookpackageController');

// for JOI Validation but we can't need to more vallidation so we can not use in this project
// const { createBookPackage, updateBookPackage } = require('../validators/bookpackageValidator');

const router = express.Router();

// Create new bookpackage
router.post('/store', bookpackageController.createBookPackage);

// Get all bookpackages
router.get('/getall', bookpackageController.getBookPackages);

// Get bookpackage by id
router.get('/:id', bookpackageController.getBookPackageById);
// router.get('/code/:code', bookpackageController.getByBookPackageCode);
// router.get('/companyName/:companyName', bookpackageController.getByBookPackageCompanyName);

// Update bookpackage by id
router.put('/:id', bookpackageController.updateBookPackageById);

// Delete bookpackage by id
router.delete('/:id', bookpackageController.deleteBookPackageById);
// router.delete('/companyName/:companyName', bookpackageController.deleteBookPackageByCompanyName);
// router.delete('/code/:code', bookpackageController.deleteBookPackageByCode);

module.exports = router;
