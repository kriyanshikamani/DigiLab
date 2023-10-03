
const express = require('express');

const bookpackageController = require('../controllers/bookpackageController');

// for JOI Validation but we can't need to more vallidation so we can not use in this project
// const { createBookpackage, updateBookpackage } = require('../validators/bookpackageValidator');

const router = express.Router();

// Create new bookpackage
router.post('/store', bookpackageController.createBookpackage);

// Get all bookpackages
router.get('/getall', bookpackageController.getBookpackages);

// Get bookpackage by id
router.get('/:id', bookpackageController.getBookpackageById);
// router.get('/code/:code', bookpackageController.getByBookpackageCode);
// router.get('/companyName/:companyName', bookpackageController.getByBookpackageCompanyName);

// Update bookpackage by id
router.put('/:id', bookpackageController.updateBookpackageById);

// Delete bookpackage by id
router.delete('/:id', bookpackageController.deleteBookpackageById);
// router.delete('/companyName/:companyName', bookpackageController.deleteBookpackageByCompanyName);
// router.delete('/code/:code', bookpackageController.deleteBookpackageByCode);

module.exports = router;
