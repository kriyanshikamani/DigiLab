
const express = require('express');

const testcategoryController = require('../controllers/testcategoryController');

// for JOI Validation but we can't need to more vallidation so we can not use in this project
// const { createTestcategory, updateTestcategory } = require('../validators/testcategoryValidator');

const router = express.Router();

// Create new testcategory
router.post('/store', testcategoryController.createTestcategory);

// Get all testcategorys
router.get('/getall', testcategoryController.getTestcategorys);

// Get testcategory by id
router.get('/:id', testcategoryController.getTestcategoryById);
// router.get('/code/:code', testcategoryController.getByTestcategoryCode);
// router.get('/companyName/:companyName', testcategoryController.getByTestcategoryCompanyName);

// Update testcategory by id
router.put('/:id', testcategoryController.updateTestcategoryById);

// Delete testcategory by id
router.delete('/:id', testcategoryController.deleteTestcategoryById);
// router.delete('/companyName/:companyName', testcategoryController.deleteTestcategoryByCompanyName);
// router.delete('/code/:code', testcategoryController.deleteTestcategoryByCode);

module.exports = router;
