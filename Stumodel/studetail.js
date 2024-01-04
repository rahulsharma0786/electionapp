const mongoose=require("mongoose")
const studetails=new mongoose.Schema({
"name":String,
"cname":String,

})

module.exports=mongoose.model("sturecord",studetails)


