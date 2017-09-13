const express = require('express');
const validate = require('express-validation');
const paramValidators = require('../helpers/validators');
const contactCtrl = require('../controllers/contact.controller');
const router = express.Router();

router.route('/')
    .get(contactCtrl.list)
    .post(validate(paramValidators.createContact), contactCtrl.create)

router.route('/:contactId')
    .get(contactCtrl.get)
    .put(validate(paramValidators.updateContact), contactCtrl.update)
    .delete(contactCtrl.remove);

router.param('contactId', contactCtrl.load);

module.exports = router;
