const express = require('express');

const referralController = require('../controllers/referralController');

// for JOI Validation but we can't need to more vallidation so we can not use in this project
// const { createreferral, updatereferral } = require('../validators/referralValidator');

const router = express.Router();

// Create new referral
router.post('/store', referralController.createReferral);

// Get all referrals
router.get('/getall', referralController.getReferrals);

// Get referral by id
router.get('/:id', referralController.getReferralById);
// router.get('/code/:code', referralController.getByreferralCode);
// router.get('/companyName/:companyName', referralController.getByreferralCompanyName);

// Update referral by id
router.put('/:id', referralController.updateReferralById);

// Delete referral by id
router.delete('/:id', referralController.deleteReferralById);
// router.delete('/companyName/:companyName', referralController.deletereferralByCompanyName);
// router.delete('/code/:code', referralController.deletereferralByCode);

module.exports = router;
