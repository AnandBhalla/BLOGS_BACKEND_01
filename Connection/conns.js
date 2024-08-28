const mongoose=require('mongoose')
const MongoUri=process.env.MongoUri;
const connect=async ()=>{
    try {
        await mongoose.connect(`${MongoUri}`).then(()=>console.log("connected to mongo"));
    } catch (error) {
        console.log(error);
    }
    
}

connect();