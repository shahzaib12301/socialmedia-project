
import Ordermodel from "../../model/order/order.js";

 
 const orderController={
    createorder:async(req,res)=>{
        try{
            const {orderid,costumername}=req.body;
           const data=await Ordermodel.create({
            orderid,
            costumername
          
            });
            
            return res.status(201).json({
                Message:"The order is Added...",
                data,
            });
               
        }
        catch(error)
        {
            return res.status(500).json({
                Message:"The order is not Added...",
                
            });
        }
        
    }

 }
 export default orderController;