const emergency = document.getElementById("fogy")
const joi = document.getElementById("status")
const firestation = document.getElementById("firestation")
const policestation = document.getElementById("policestation")

let isActive =false
let isActivebtn =false
let isActivebtn2 = false
emergency.addEventListener("click",function(){
    if (!isActive) {
     emergency.style = `
      width: 100px;
  height: 100px;
  background-color: #e74c3c;
  border: none;
  border-radius: 50%;
  font-size: 30px;
  color: #fff;
  cursor: pointer;
  position: relative;
  animation: pulse 1.5s infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5rem;
    `   
    joi.innerHTML = "Status : Active"

    isActive = true
    }
    else{
        emergency.style=`width: 100px;height: 100px;border-radius: 50%;border: none;background: #fff;font-size: 30px;`
         joi.innerHTML = "Status : Inactive"
        isActive = false
    }


    if (!isActivebtn) {
        alert("Calling to fire station")
        firestation.style.background = "#2AA63E"
        isActivebtn = true
    }

    else{
        alert("Cancel")
        firestation.style.background = "#e74c3c"
        isActivebtn = false
    }
})


document.getElementById("toggleForm").addEventListener("click",function(){
    document.getElementById("formContainer").classList.toggle('show')
})