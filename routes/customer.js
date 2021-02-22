const express = require('express')
const router = express.Router()

const controller = require('../controller/customer')
const Customer = require('../middleware/customer')

router.post('/register', controller.registercustomer)
router.post('/login', controller.logincustomer)

router.post('/add-vehicle',Customer, controller.addvehicel)
router.patch('/edit-vehicle/:id',Customer, controller.editvehicle)
router.delete('/delete-vehicle/:id',Customer, controller.deletevehicle)

router.post('/create-appointment',Customer, controller.createappointment)
router.patch('/edit-appointment/:id',Customer, controller.editappointment)

module.exports = router