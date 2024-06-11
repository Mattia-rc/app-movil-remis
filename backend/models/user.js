const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')


const UserSchema = new mongoose.Schema({
    "username":{
        type:String,
        required:true,
        unique:true 
    },
    "password":{
        type:String,
        required:true
    },
    "nombre":{
        type:String,
        required:true,
    },
    "movil":[
        {
            "marca":{
                type:String,
                required:true,
              },
              "modelo":{
                type:String,
                required:true,
              }, 
              "patente":{
                type:String,
                required:true,
              },
              "numeroMovil":{
                type:Number,
                required:true
              },

              servicios:[
                {
                    "date":{
                        type:Date,
                        required:true
                    },
                    "origen":{
                        type:String,
                        required:true,
                    },
                    "total":{
                        type:Number,
                        required:true
                    }
                }
              ]
        }
    ]
});


UserSchema.pre('save', async function(next) {
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 10);
    }
    next()
})

module.exports = mongoose.model('User', UserSchema);