import jwt from 'jsonwebtoken';
import User from '../models/UserSchema.js';
import Doctor from '../models/DoctorSchema.js';

export const authenticate = async (req, res, next) => {
    //get token from header
    const authToken = req.headers.authorization;

    //check if token exists
    if( !authToken || !authToken.startsWith('Bearer ')){
        return res
        .status(401)
        .json({success:false, message: 'No token Authorization Denied'});
    }
    try{
        const token = authToken.split(' ')[1];

        //verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        req.userId = decoded.id;
        req.role = decoded.role;

        next();//must call next to move to the next middleware

    }catch(err){
        if(err.name === 'TokenExpiredError'){
            return res
            .status(401)
            .json({success:false, message: 'Token Expired'});
        }
        return res.status(401).json({success:false, message: 'Invalid Token'});
    }
};

export const restrict = roles => async (req, res, next) => {
    const userId = req.userId;

    let user;

    const patient = await User.findById(userId);
    const doctor = await Doctor.findById(userId);

    if(patient){
        user = patient;
    }
    if(doctor){
        user = doctor;
    }

    if(!roles.includes(user.role)){
        return res
        .status(403)
        .json({success:false, message: 'You are not authorized to access this route'});
    }

    next();//must call next to move to the next middleware
};