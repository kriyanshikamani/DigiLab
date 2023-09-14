const express = require('express');

const PatientController = require('../controllers/patientController');

// for JOI Validation but we can't need to more vallidation so we can not use in this project
// const { createPatient, updatePatient } = require('../validators/PatientValidator');

const router = express.Router();

// Create new Patient
router.post('/store', PatientController.createPatient);

// Get all Patients
router.get('/getall', PatientController.getPatients);

// Get Patient by id
router.get('/:id', PatientController.getPatientById);
// router.get('/code/:code', PatientController.getByPatientCode);
// router.get('/companyName/:companyName', PatientController.getByPatientCompanyName);

// Update Patient by id
router.put('/:id', PatientController.updatePatientById);

// Delete Patient by id
router.delete('/:id', PatientController.deletePatientById);
// router.delete('/companyName/:companyName', PatientController.deletePatientByCompanyName);
// router.delete('/code/:code', PatientController.deletePatientByCode);

module.exports = router;
