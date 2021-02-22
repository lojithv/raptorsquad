const Vehicle = require('../model/vehicle')
const Customer = require('../model/customer')
const Record = require('../model/service')
const Appointment = require('../model/appointment')
const Agent = require('../model/agent')

exports.loginagent = async(req,res)=>{
    const agentData = req.body
    try {
        const { user, error } = await Agent.loginWithEmailAndPassword(
            agentData
          );
          if (error) {
            return res.status(500).send({ error });
          }
          const { token, error: tokenError } = await user.generateToken();
          if (tokenError) {
            return res.status(500).send({ error: tokenError });
          }
          res.send({ agent: user, token });
        res.send()
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}


exports.createrecord = async(req,res)=>{
    const data = req.body
    try {
        const record =  new Record({...data})
        const saved = await record.save()
        res.send({record:saved})
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

exports.editrecords = async(req,res)=>{
    const id = req.params.id
    const data = req.body
    try {
        const record = await Record.findByIdAndUpdate(id, {...data}, {new:true})
        res.send({record})
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

exports.deleterecords = async(req,res)=>{
    const id = req.params.id
    try {
        await Record.findByIdAndDelete(id)
        res.send({message:'record deleted successfully'})
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

exports.viewappointments = async(req,res)=>{
    try {
        const appointment = await Appointment.find()
        res.send({appointment})
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

exports.searchcustomers = async(req,res)=>{
    try {
        const customers = await Customer.find()
        res.send({customers})
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

exports.customervehicle = async(req,res)=>{
    try {
        const vehicles = await Vehicle.find() 
        res.send({vehicles})
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

exports.searchrecords = async(req,res)=>{
    try {
        const records = await Record.find()
        res.send({records})
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

exports.appointmentstatus = async(req,res)=>{
    const id = req.params.id
    const {status} = req.body
    try {
        const appointment = await Appointment.findByIdAndUpdate(id, {status}, {new:true})
        res.send({appointment})
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

