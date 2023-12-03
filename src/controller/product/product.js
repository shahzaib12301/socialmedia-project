import ProductModel from "../../model/product/product.js";
import LikeModel from "../../model/like/like.js";

 
 const ProductController={
    createProduct:async(req,res)=>{
        try{
            const {productname,productid,productprice}=req.body;
           const data=await ProductModel.create({
                productname,
                productid,
                productprice
            });
            
            return res.status(201).json({
                Message:"The product is Added...",
                data,
            });
               
        }
        catch(error)
        {
            return res.status(500).json({
                Message:"The product is not Added...",
                
            });
        }
        
    },
    SearchProduct:async(req,res)=>{
        try{ 
            const {search}=req.params;
            const data=await ProductModel.findAndCountAll({
                where:{
                    postid:search,
                },
                include:[{
                    LikeModel,
                
                }]
                
            })

            return res.json({
                data,
            })



        }catch(error){
            return res.status(500).json({
                message:"there is something wrong"
            })
        }
    },
    UpdateProduct:async(req,res)=>{
        try{
            const {postid,type,userUserid}=req.body;
            const data=await ProductModel.findOne({
                where:{
                    postid,
                }
            })
            data.postid=postid,
            data.type=type,
            data.userUserid=userUserid
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
    RemoveProduct:async(req,res)=>{

        try{ 
            const {del}=req.params;
            const data=await ProductModel.findOne({
                where:{
                    postid:del,
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
    DisplayProduct:async(req,res)=>{

        try{
            const data= await ProductModel.findAll()
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
 export default ProductController;