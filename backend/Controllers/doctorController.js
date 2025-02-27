import { query } from "express";
import Doctor from "../models/DoctorSchema.js";
//PUT
export const updateDoctor = async (req, res) => {
    const id = req.params.id;

    try{
        const updatedDoctor = await Doctor.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );

        res.status(200).json({
            success: true,
            message: "Doctor updated successfully",
            data: updatedDoctor,
        });
    }catch(err){
        res.status(500).json({ success: false, message: "Failed to update Doctor"});
    } 
};
//DELETE
export const deleteDoctor = async (req, res) => {
    const id = req.params.id;

    try{
        await Doctor.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Doctor successfully deleted",
        });
    }catch(err){
        res.status(500).json({ success: false, message: "Failed to delete Doctor"});
    } 
};
//GET
export const getSingleDoctor = async (req, res) => {
    const id = req.params.id;

    try{
        const doctor = await Doctor.findById(id).select("-password");

        res.status(200).json({
            success: true,
            message: "Doctor Found",
            data: doctor,
        });
    }catch(err){
        res.status(404).json({ success: false, message: "No Doctor Found"});
    } 
};
//GET
export const getAllDoctor = async (req, res) => {
    try{
        const {query} = req.query;
        let doctors;
        if(query){
            doctors = await Doctor.find({'isApproved': 'approved', 
                $or:[
                    {name:{$regex:query, $options: 'i'}}, 
                    {specialization:{$regex:query, $options: 'i'}},
                ]
            }).select("-password");
        }
        else{
            doctors = await Doctor.find({'isApproved': 'approved'}).select("-password");
        }

        res.status(200).json({
            success: true,
            message: "Doctors Found",
            data: doctors,
        });
    }catch(err){
        res.status(404).json({ success: false, message: "Not Found"});
    } 
};