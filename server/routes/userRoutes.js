const express = require('express');

const userController = require('../controllers/userController');

// for JOI Validation but we can't need to more vallidation so we can not use in this project
// const { createUser, updateUser } = require('../validators/userValidator');

const router = express.Router();

// Create new user
router.post('/store', userController.createUser);

// Get all users
router.get('/getall', userController.getUsers);

// Get user by id
router.get('/:id', userController.getUserById);
// router.get('/code/:code', userController.getByUserCode);
// router.get('/companyName/:companyName', userController.getByUserCompanyName);

// Update user by id
router.put('/:id', userController.updateUserById);

// Delete user by id
router.delete('/:id', userController.deleteUserById);
// router.delete('/companyName/:companyName', userController.deleteUserByCompanyName);
// router.delete('/code/:code', userController.deleteUserByCode);

module.exports = router;
