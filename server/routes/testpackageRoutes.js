const express = require('express');

const testpackageController = require('../controllers/testpackageController');

// for JOI Validation but we can't need to more vallidation so we can not use in this project
// const { createTestpackage, updateTestpackage } = require('../validators/testpackageValidator');

const router = express.Router();

// Create new testpackage
router.post('/store', testpackageController.createTestpackage);

// Get all testpackages
router.get('/getall', testpackageController.getTestpackages);

// Get testpackage by id
router.get('/:id', testpackageController.getTestpackageById);
// router.get('/code/:code', testpackageController.getByTestpackageCode);
// router.get('/companyName/:companyName', testpackageController.getByTestpackageCompanyName);

// Update testpackage by id
router.put('/:id', testpackageController.updateTestpackageById);

// Delete testpackage by id
router.delete('/:id', testpackageController.deleteTestpackageById);
// router.delete('/companyName/:companyName', testpackageController.deleteTestpackageByCompanyName);
// router.delete('/code/:code', testpackageController.deleteTestpackageByCode);

module.exports = router;
