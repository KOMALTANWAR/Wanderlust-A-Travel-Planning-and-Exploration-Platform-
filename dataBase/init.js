const mongoose = require('mongoose');
const initData=require("./listing");
main().then((req,res)=>{
    console.log("connected 2 to database");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}
const listingSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    image:{
        type:String,
    },
    price:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    }
});
const listing=mongoose.model("listing",listingSchema);
// async function saveToDb(data){
//     await listing.deleteMany({});
//     await listing.insertMany(initData.data);
// }
// saveToDb(initData).then((req,res)=>{
//     console.log("data2 was saved succesfully");
// })
module.exports=listing;
