const express=require("express")
const app=express()
const mongoose=require("mongoose")
const Student=require("./stucontrolar/stucon")
const DB="mongodb+srv://rkumar45650:r1234@cluster0.z8ajs2p.mongodb.net/electionss?retryWrites=true&w=majority"
mongoose.connect(DB).then(()=>{
    console.log("connect")
})
const cors = require('cors')
app.use(cors())
app.use(express.json())

app.get("/studisplay", Student.Studentdisplay)
app.post("/stusave",Student.sturecord)


app.listen(8000)



   
