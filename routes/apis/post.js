const express = require('express');
const router = express.Router();
const Post = require('../../models/Post')
const Role = require('../../models/role')
var async = require("async");
router.get('/role', async (req,res)=>{

try {
let data = await Post.aggregate([
  {
     $lookup:
       {
         from: "roles",
         localField: "ID",
         foreignField: "Role",
          as: "RolesData"
       }   
   },
   {$unwind:"$RolesData"},
   {$match: {ID:{$ne:"Parent"}}}
   ,
    { $project: {"Name":1,"Role":1, "RolesData":1, "_id":0} }   
]);
console.log(`Resonse data ${data}`);
for(var i=0; i <data.length;i++) {
  data[i].roles = [];
  data[i].roles[0] = {'Id':data[i].RolesData.Role,"rolename":data[i].RolesData.User};
  if(i>0) {
    data[i].roles = [...data[i].roles, ...data[i-1].roles]
  }
  delete data[i].RolesData;
}
res.json({info: data})

} catch(err) {
console.log('error', err);
}
})

module.exports = router;