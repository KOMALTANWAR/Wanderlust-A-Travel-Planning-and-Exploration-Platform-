//requirements
const express=require("express");
const path=require("path");
const ejs=require("ejs");
const mongoose=require("mongoose");
const listing=require("./dataBase/init");
const methodOverride = require('method-override');
const ejsMate=require("ejs-mate");


//setting up the app
const app=express();
app.use(methodOverride('_method'));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({ extended: true }));
app.engine("ejs" ,ejsMate);

//setting up server
app.listen(8080,(req,res)=>{
    console.log("server is listening incoming requests");
})

//building connections with database
main().then((req,res)=>{
    console.log("connected to database");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

//creating different routes


//home route
app.get("/home",(req,res)=>{
    res.render("home.ejs");
})

app.get("/listing",async (req,res)=>{
let allListings= await listing.find();
    res.render("listing.ejs",{allListings});
});

//show route
app.get("/show/:id",async (req,res)=>{
    let {id}=req.params;
    let  list=await listing.findById(id);
    res.render("show.ejs",{list});
   })

    //create route
app.get("/create",(req,res)=>{
    res.render("create.ejs");
})

app.put("/create/newPost",(req,res)=>{
    const {title,description,image,price,location,country}=req.body;
    const newListing=new listing({
       title:title,
       image:image,
       description:description,
       price:price,
       location:location,
       country:country
    });
    newListing.save();
 res.redirect("http://localhost:8080/listing");
})

//edit route
app.get("/edit/:id",async (req,res)=>{
    const {id}=req.params;
    const list = await listing.findById(id);
res.render("edit.ejs",{list});
})

//update route
app.patch("/create/:id",async (req,res)=>{
    let {id}=req.params;
    const {title,description,image,price,location,country}=req.body;
    await listing.findByIdAndUpdate(id,{$set:{
        title:title,
        description:description,
        image:image,
        price:price,
        location:location,
        country:country
    }})
  res.redirect("http://localhost:8080/listing");
})
//delete route
app.delete("/delete/:id",async (req,res)=>{
    let {id}=req.params;
    await listing.findByIdAndDelete(id);
    res.redirect("http://localhost:8080/listing");

})