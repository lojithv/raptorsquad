const express = require('express')
const router = express.Router()

const controller = require('../controller/agent')
const Agent = require('../middleware/agent')

router.post('/login', controller.loginagent)

router.post('/create-record', Agent,controller.createrecord)
router.patch('/edit-record/:id',Agent, controller.editrecords)
router.delete('/delete-record/:id',Agent, controller.deleterecords)

router.get('/view-appointment', Agent,controller.viewappointments)
router.get('/search-customers',Agent, controller.searchcustomers)
router.get('/search-customer-vehicle',Agent, controller.customervehicle)
router.get('/search-records',Agent, controller.searchrecords)
router.patch('/appointment-status',Agent, controller.appointmentstatus)

module.exports = router