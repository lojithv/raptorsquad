const Admin = require('../model/admin')
const Vehicle = require('../model/vehicle')
const Agent = require('../model/agent')
const Customer = require('../model/customer')
const Record = require('../model/servicerecord')

exports.registeradmin = async(req,res)=>{
    const {email, password, username, name} = req.body
    try {
        const user = new Admin({
            email,
            password,
            username,
            name
        })
        const admin = await user.save()
        res.send({message:'Admin create successfully', admin})
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

exports.loginadmin = async(req,res)=>{
    const adminData = req.body
    try {
        const { user, error } = await Admin.loginWithEmailAndPassword(
            adminData
          );
          if (error) {
            return res.status(500).send({ error });
          }
          const { token, error: tokenError } = await user.generateToken();
          if (tokenError) {
            return res.status(500).send({ error: tokenError });
          }
          res.send({ admin: user, token });
        res.send()
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}


exports.addcustomer = async(req,res)=>{
    const {email, password, username, name} = req.body
    try {
        const user = new Customer({
            email,
            password,
            username,
            name
        })
        const customer = await user.save()
        res.send({message:'customer create successfully', customer})
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

exports.editcustomer = async(req,res)=>{
    const id = req.params.id
    const data = req.body
    try {
        const customer = await Customer.findByIdAndUpdate(id, {...data}, {runValidators:true, new:true})
    
        res.send({customer})
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

exports.addvehicle = async(req,res)=>{
    const {vehicleType} = req.body
    try {
        const vehicle = new Vehicle({vehicleType})
        const save = await vehicle.save()
        res.send({message:'vehicle create successfully', vehicle:save})
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

exports.editvehicle = async(req,res)=>{
    const id = req.params.id
    const {vehicleType} = req.body
    try {
        const vehicle = await Vehicle.findByIdAndUpdate(id, {vehicleType}, {runValidators:true, new:true})

        res.send({vehicle})
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

exports.deletevehicle = async(req,res)=>{
    const id = req.params.id
    try {
        await Vehicle.findByIdAndDelete(id)
    
        res.send({message:'vehicle delete successfully'})
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

exports.addagent = async(req,res)=>{
    const {email, password, username,name} = req.body
    try {
        const user  = new Agent({
            email,
            password,
            username,
            name
        })
        const agent = await user.save()
        res.send({messgae:'Agent create successfully',agent })
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}


exports.editrecords = async(req,res)=>{
    const id = req.params.id
    const data = req.body
    try {
        const record = await Record.findByIdAndUpdate(id, {...data}, {runValidators:true, new:true})
        res.send({record})
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

exports.deleterecords = async(req,res)=>{
    const id = req.params.id
    try {
        await Record.findByIdAndDelete(id)
        res.send({message:'Record deleted successfully'})
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}
