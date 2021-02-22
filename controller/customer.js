const Customer = require('../model/customer')
const Vehicle = require('../model/vehicle')
const Appointment = require('../model/appointment')

exports.registercustomer = async(req,res)=>{
    const {email, password, username, name} = req.body
    try {
        const user = new Customer({
            email,
            password,
            username,
            name
        })
        const customer = await user.save()
        res.send({message:'Customers create successfully', customer})
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

exports.logincustomer = async(req,res)=>{
    const customerData = req.body
    try {
        const { user, error } = await Customer.loginWithEmailAndPassword(
            customerData
          );
          if (error) {
            return res.status(500).send({ error });
          }
          const { token, error: tokenError } = await user.generateToken();
          if (tokenError) {
            return res.status(500).send({ error: tokenError });
          }
          res.send({ customer: user, token });
        res.send()
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

exports.addvehicel = async(req,res)=>{
    const {vehicleType} = req.body
    try {
        const vehicle = new Vehicle({vehicleType})
        const saved = await vehicle.save()
        res.send({vehicle:saved})
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

exports.editvehicle = async(req,res)=>{
    const id = req.params.id
    const {vehicleType} = req.body
    try {
        const vehicle = await Vehicle.findByIdAndUpdate(id, {vehicleType}, {new:true})
        res.send({vehicle})
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

exports.deletevehicle = async(req,res)=>{
    const id = req.params.id
    try {
        await Vehicle.findByIdAndDelete(id)
        res.send({message:"vehicle delete successfully"})
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

exports.createappointment = async(req,res)=>{
    const data = req.body
    try {
        const appointment = new Appointment({...data})
        const saved = await appointment.save()
        res.send({appointment:saved})
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

exports.editappointment = async(req,res)=>{
    const id = req.params.id
    const data = req.body
    try {
        const appointment = await Appointment.findByIdAndUpdate(id, {...data}, {new:true})
        res.send({appointment})
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

