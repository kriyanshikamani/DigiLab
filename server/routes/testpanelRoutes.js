const express = require('express');

const testpanelController = require('../controllers/testpanelController');

// for JOI Validation but we can't need to more vallidation so we can not use in this project
// const { createTestpanel, updateTestpanel } = require('../validators/testpanelValidator');

const router = express.Router();

// Create new testpanel
router.post('/store', testpanelController.createTestpanel);

// Get all testpanels
router.get('/getall', testpanelController.getTestpanels);

// Get testpanel by id
router.get('/:id', testpanelController.getTestpanelById);
// router.get('/code/:code', testpanelController.getByTestpanelCode);
// router.get('/companyName/:companyName', testpanelController.getByTestpanelCompanyName);

// Update testpanel by id
router.put('/:id', testpanelController.updateTestpanelById);

// Delete testpanel by id
router.delete('/:id', testpanelController.deleteTestpanelById);
// router.delete('/companyName/:companyName', testpanelController.deleteTestpanelByCompanyName);
// router.delete('/code/:code', testpanelController.deleteTestpanelByCode);

module.exports = router;
