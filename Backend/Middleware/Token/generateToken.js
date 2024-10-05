const jwt = require('jsonwebtoken');

module.exports.generateToken = (userInfo) =>{
    try{
        const payload ={
            id:userInfo._id,
            email:userInfo.email,
            role:userInfo.role
        }

        const accessToken = jwt.sign(
            payload,
            process.env.TOKEN_SECRET,
            { expiresIn: '1h' }
        )
        return {accessToken}
    }catch(error){
        return Promise.reject(error);
    }
}

