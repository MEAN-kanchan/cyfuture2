const mongoose = require('mongoose')
const roleSchema = mongoose.Schema({
	User:{type:String},
	Role:{type:Number},
	Parent:{type:Number}
})

const role = module.exports =mongoose.model('Role',roleSchema);