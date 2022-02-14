const {model, Schema}=require('mongoose')

const ValePresente = model(
    'ValePresente',
    new Schema({ 
        
     codigo:{type:String, required:true},
     validade: {type:String, required:true},
     valor:{type:Number, required:true},
     quantidade:{type:Number, required:true},
     descricao:{type:String, required:true},

    })
);

module.exports=ValePresente;