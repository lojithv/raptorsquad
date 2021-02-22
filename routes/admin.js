const express = require('express')
const router = express.Router()

const controller = require('../controller/admin')
const Admin = require('../middleware/admin')

router.post('/register', controller.registeradmin)
router.post('/login',controller.loginadmin)


router.post('/add-customer',Admin, controller.addcustomer)
router.patch('/edit-customer/:id',Admin, controller.editcustomer)

router.post('/add-vehicle',Admin, controller.addvehicle)
router.patch('/edit-vehicle/:id',Admin, controller.editvehicle)
router.delete('/delete-vehicle/:id',Admin, controller.deletevehicle)

router.post('/add-agent',Admin, controller.addagent)

router.patch('/edit-records/:id', Admin,controller.editrecords)
router.delete('/delete-records/:id',Admin, controller.deleterecords)

module.exports = router