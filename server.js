const express=require("express")
const path=require("path")
const app=express()
const staticfolder=express.static(path.join(__dirname,"public"));
app.use(staticfolder)

app.get("/",(req,res)=>{
    res.sendFile(path.join.path(__dirname+"index.html"));

})
app.listen(5000,()=>{
    console.log("server is listening on port 5000..");
})