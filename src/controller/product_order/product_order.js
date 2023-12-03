const product_ordercontroller={
    add:(req,res)=>{
        try{
            return res.status(201).json({
                message:"shahzaib",
            })

        }
        catch(error){
            console.log("Data is not added in product_order..")
        }
       
    }
}



export default product_ordercontroller;