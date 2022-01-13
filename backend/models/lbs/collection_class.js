'use strict'

class Collection{

    constructor(model){
        this.model=model;
       
    }

    async read(id){
        let record=null;
      try{

        if(id){
            record=await this.model.findOne({where:{id:id}})
            console.log("Collection class ===>",this.model)
        }
        else{
            record=await this.model.findAll();
        }
        return record;


      }catch(error){
          console.log(`catch ERROR in READ records model ${this.model}`,error.message);
      } 
    }

    async create(obj){
        try{
            return await this.model.create(obj);
        }catch(error){
            console.log(`catch ERROR in CREATE records model ${this.model}`,error.message);
        }
    }

    async delete(id){
        if(!id){
           throw new error(`invalid or unprovided ID in model ${this.model.name}`)
        }
        try{
            let deletedItem=await this.model.destroy({where:{id}});
            return deletedItem;
        }catch(error){ console.log(`catch ERROR in DELETE record model ${this.model}`,error.message);
        }
    }

    async update(id , obj){
        try{
            let currentRecord=await this.model.findOne({where:{id:id}});
            let updatedRecord=await currentRecord.update(obj);
            return updatedRecord;
        }
    catch(error){
      console.log(`catch ERROR in UPDATE record model ${this.model}`,error.message);
    }
}
}

module.exports=Collection;
   

