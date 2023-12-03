import CommentModel from "../../model/comment/comment.js";
const CommentController={

    CreateComment:async(req,res)=>{
        try{

            const {userUserid,postPostid}=req.body;
            const data= await CommentModel.create({
                userUserid,
                postPostid

            })
         
            return res.json({
                message:"Data is Inserted...",
                data,
            })


        }catch(error){
            return res.status(500).json({
                Message:error
            })
        }
    },
    UpdateComment:async(req,res)=>{
        try{
            const {id,postPostid,userUserid}=req.body;
            const data=await CommentModel.findOne({
                where:{
                    id,
                }
            })
            data.userUserid=userUserid
            data.postPostid=postPostid
            const newdata= await data.save()
            return res.json({
                Message:"Data Updated...",
                newdata,
            })
        }
        catch(error){

            res.json({
                Message:error,
            })


        }
    },
    RemoveComment:async(req,res)=>{

        try{ 
            const {del}=req.params;
            const data=await CommentModel.findOne({
                where:{
                    id:del,
                }
               
                
            })
            await data.destroy()

            return res.json({
                message:"This Entry is Deleted...",
               
            })



        }catch(error){
            return res.status(500).json({
                message:error
            })
        }


    },
    DisplayComment:async(req,res)=>{

        try{
            const data= await CommentModel.findAll()
            res.json({
                data
            })


        }catch(error){
            return res.status(500).json({
                message:error
            })
        }

    }

}


export default CommentController;