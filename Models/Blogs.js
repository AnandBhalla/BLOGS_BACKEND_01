const mongoose=require('mongoose')
const Blogs= new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    }},
    {timestamps:true}
);
module.exports=mongoose.model("Blogs",Blogs)