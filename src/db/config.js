import { Sequelize } from "sequelize";

const  envdata=process.env
const sequelize =new Sequelize(
    envdata.DB_name,
    envdata.DB_username,
    envdata.DB_password,
    {
    host:envdata.DB_host,
    Port:envdata.Port,
    dialect:envdata.DB_dialect,
    logging:false,
})

export const DBConnection=async()=>{

    try{
       await sequelize.authenticate();
       console.log("DB is Connected Successfully...")

    }catch(err){
        console.log("DB is Not Connected")
    }
    
}

export default sequelize;