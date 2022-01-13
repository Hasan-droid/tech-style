'use strict'

const showerModel=(sql , data_type)=>{
    let showerSchema={
        images:{
            type:data_type.BLOB,
            allowNull:false,
        },
        description:{
            type:data_type.STRING,
            allowNull:true
        },
        price:{
            type:data_type.NUMBER,
            allowNull:false
        }
    }
    let showers=sql.define('showers',showerSchema);
    return showers;
}

module.exports=showerModel;