const router=require('express').Router();
const blogs=require('../Models/Blogs')

router.post("/post",async (req,res)=>{
    const {title,description}=req.body;
    const newBlog=new blogs({title,description});
    await newBlog.save();
})

router.get("/getAll",async(req,res)=>{
    const data= await blogs.find().sort({createdAt:-1});
    res.json({data:data});
})

router.get("/getRecent",async(req,res)=>{
    const data= await blogs.find().sort({createdAt:-1}).limit(3);
    res.json({data:data});
})

router.get("/get/:id",async(req,res)=>{
    const id=req.params.id;
    const data= await blogs.findById(id);
    res.json({data:data});
})

router.put("/update/:id",async(req,res)=>{
    const {title,description}=req.body;
    const id=req.params.id;
    const data= await blogs.findByIdAndUpdate(id,{title,description});
})

router.delete("/deleteblogs/:id",async(req,res)=>{
    const id=req.params.id;
    const data= await blogs.findByIdAndDelete(id);
})


module.exports=router;