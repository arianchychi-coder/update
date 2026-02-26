const alarm = document.getElementById("aboutallalarm")
const alarmstatus = document.getElementById("statusalarm")
const pressurealarm =document.getElementById("pressurealarm")
const encounteralarm = document.getElementById("encounteralarm")
const distancealarm = document.getElementById("distancealarm")
const pressure = document.getElementById("pressure")
const encounter = document.getElementById("encounter")
const distance = document.getElementById("distance")

let alarmActive = false

alarm.addEventListener("click",function() {
    if (!alarmActive) {
        alarm.style = `
      width: 90px;
  height: 90px;
  background-color: #e74c3c;
  border: none;
  border-radius: 50%;
  font-size: 3rem;
  color: #fff;
  cursor: pointer;
  position: relative;
  animation: pulse 1.5s infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5rem;
  margin-bottom :.5rem
    `  

    pressure.style = `width: 90px;
  height: 90px;
  background-color: #e74c3c;
  border: none;
  border-radius: 50%;
  font-size: 3rem;
  color: #fff;
  cursor: pointer;
  position: relative;
  animation: pulse 1.5s infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5rem;
  margin-bottom :.5rem
        `

        encounter.style = `
        width: 90px;
  height: 90px;
  background-color: #e74c3c;
  border: none;
  border-radius: 50%;
  font-size: 3rem;
  color: #fff;
  cursor: pointer;
  position: relative;
  animation: pulse 1.5s infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5rem;
  margin-bottom :.5rem
        `

        distance.style = `
        width: 90px;
  height: 90px;
  background-color: #e74c3c;
  border: none;
  border-radius: 50%;
  font-size: 3rem;
  color: #fff;
  cursor: pointer;
  position: relative;
  animation: pulse 1.5s infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5rem;
  margin-bottom :.5rem
        `

        alarmstatus.innerHTML = "Status : Active"
        pressurealarm.innerHTML = "Status : Active"
        encounteralarm.innerHTML = "Status : Active"
        distancealarm.innerHTML = "Status : Active"
    alarmActive = true
    }
    else{
        alarm.style = `
        width: 90px;height: 90px;border-radius: 50%;border: none;background: #fff;font-size: 3rem;margin-bottom:.5rem`
        pressure.style = `
        width: 90px;height: 90px;border-radius: 50%;border: none;background: #fff;font-size: 3rem;margin-bottom:.5rem`
        encounter.style = `
        width: 90px;height: 90px;border-radius: 50%;border: none;background: #fff;font-size: 3rem;margin-bottom:.5rem`
        distance.style = `
        width: 90px;height: 90px;border-radius: 50%;border: none;background: #fff;font-size: 3rem;margin-bottom:.5rem`
        alarmstatus.innerHTML = "Status : InActive"
        pressurealarm.innerHTML = "Status : InActive"
        encounteralarm.innerHTML = "Status : InActive"
        distancealarm.innerHTML = "Status : InActive"
        alarmActive = false
    }
    
})



//  pressure //
let pressureActive = false;
pressure.addEventListener("click",function(){
    if (!pressureActive) {
        pressure.style = `width: 90px;
  height: 90px;
  background-color: #e74c3c;
  border: none;
  border-radius: 50%;
  font-size: 3rem;
  color: #fff;
  cursor: pointer;
  position: relative;
  animation: pulse 1.5s infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5rem;
  margin-bottom :.5rem
        `
        pressurealarm.innerHTML = "Status : Active"

    pressureActive = true;
    }

    else{
        pressure.style = `
        width: 90px;height: 90px;border-radius: 50%;border: none;background: #fff;font-size: 3rem;margin-bottom:.5rem`
        pressurealarm.innerHTML = "Status : InActive"
        pressureActive = false
    }
})



//  encounter  //
let encounterActive = false
encounter.addEventListener("click",function(){
    if (!encounterActive) {
        encounter.style = `
        width: 90px;
  height: 90px;
  background-color: #e74c3c;
  border: none;
  border-radius: 50%;
  font-size: 3rem;
  color: #fff;
  cursor: pointer;
  position: relative;
  animation: pulse 1.5s infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5rem;
  margin-bottom :.5rem
        `

        encounteralarm.innerHTML = "Status : Active"
        encounterActive = true
    }
    else{
        encounter.style = `
        width: 90px;height: 90px;border-radius: 50%;border: none;background: #fff;font-size: 3rem;margin-bottom:.5rem`
        encounteralarm.innerHTML = "Status : InActive"
        encounterActive = false
    }
})



let distanceActive = false
distance.addEventListener("click",function(){
    if (!distanceActive) {
        distance.style = `
        width: 90px;
  height: 90px;
  background-color: #e74c3c;
  border: none;
  border-radius: 50%;
  font-size: 3rem;
  color: #fff;
  cursor: pointer;
  position: relative;
  animation: pulse 1.5s infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5rem;
  margin-bottom :.5rem
        `

        distancealarm.innerHTML = "Status : Active"
        distanceActive = true
    
    }

    else{
        distance.style = `
        width: 90px;height: 90px;border-radius: 50%;border: none;background: #fff;font-size: 3rem;margin-bottom:.5rem`
        distancealarm.innerHTML = "Status : InActive"
        distanceActive = false
    }
})