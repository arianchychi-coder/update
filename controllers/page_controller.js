const path = require("node:path")

const frogs=[
    {id:1,name:"index",file:"index.html"},
    {id:2,name:"authpage",file:"authpage.html"},
    {id:3,name:"activitydetectors",file:"activitydetectors.html"},
    {id:4,name:"surveillance",file:"surveillance.html"},
    {id:5,name:"audiblesirens",file:"audiblesirens.html"},
    {id:6,name:"voiceassistant",file:"voiceassistant.html"},
    {id:7,name:"emergencybutton",file:"emergencybutton.html"},
    {id:8,name:"controlpanel",file:"controlpanel.html"},
]


const getPage = async(req,res)=>{
    const nameURL = decodeURIComponent(req.params.name)
    const frog = frogs.find(c=>c.id===parseInt(req.params.id) && c.name===nameURL)
    if (!frog) {
        return res.status(404).send("Error in get page !")
    }
    res.sendFile(path.join(__dirname,"..","public",frog.file.trim()))
}


module.exports = {
    getPage
}