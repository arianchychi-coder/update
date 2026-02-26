require("dotenv").config()
const express = require("express")
const pageRouter = require("./routes/page_route")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use("/api/page",pageRouter)
const PORT = process.env.APP_PORT || 3000
app.listen(PORT,()=>{
    console.log(`Listen to ${PORT}`)
})

//application 

// const{app:electronApp,BrowserWindow} = require("electron")

// function creatWindow() {
  //  const win = new BrowserWindow({
   // width:1000,
   // height:800,
   // webPreferences:{
     //   nodeIntegration:false,
       // contextIsolation:true,
       // enableBlinkFeatures:false
   // }
// })
// win.loadURL("http://localhost:5500/")
 //}
 //electronApp.whenReady().then(creatWindow)