import Joi from "joi";

const UserValidation={

  UserCreate:(req,res,next)=>{

    try{
         const body=req.body;
         const schema=Joi.object({
          
         userid:Joi.string().min(1).max(2).required(),
         username:Joi.string().min(5).max(20).required(),
         age:Joi.string().min(2).max(3).required(),
         phoneno:Joi.string().min(11).required(),
         Email:Joi.string().email().required(),
         Password:Joi.string().min(6).required(),

         })

        const result= schema.validate(body);
        if(result.error){
          return res.json({
            Message:"problem",
            result
            
          })
        }

        next();



    }
    catch(error){
      return res.status(500).json({
        Message:"There is some problem...",
        error
      })

      
    }
  },
  Login:(req,res,next)=>{

    try{

      const data=req.body;
      const schema=Joi.object({

        Email:Joi.string().email().required(),
        Password:Joi.string().min(6).max(15).required()
      });

      const validator=schema.validate(data)

      if(validator.error){

        return res.json({

          Message:`These are invalid creditantials ${validator.error} `

        })

      }
      next();
     


    }
    catch(error){

    return res.json({
      message:`there is some error : ${error}`
    })
    }
  }

}

export default UserValidation;