var express = require('express');
var { detailsById, createUser, updateById, resetPassword } = require('./../controllers/userController');
var router = express.Router();

router.post('/user-details', detailsById);
router.post('/create', createUser);
router.put('/update-by-id', updateById);
router.put('/reset-password', resetPassword);

module.exports = router; 