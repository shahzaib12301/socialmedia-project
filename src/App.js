import "dotenv/config";
import express, { json } from "express";

import AllRoutes from "./route/allroutes.js";
import { DBConnection } from "./db/config.js";
import Init from "./db/init.js";

const App=express(); 
const Port=3301;
App.use(express.json());
App.use('/',AllRoutes)
DBConnection();
Init();




App.listen(Port,(error)=>{
    if(error){
        console.log("The Server is not listening")
    }else{
        console.log(`Server is started at http://localhost:${Port}`)
    }

});


