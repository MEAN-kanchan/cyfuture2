const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
	Name:{type:String},
	Role:{type:String},
	ID:{type:Number}
})

const post = module.exports =mongoose.model('User',userSchema);