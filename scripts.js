// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load",function(){

    let rocketPosX = 0;
    let rocketPosY = 0;
    let altitude = 0;

    //buttons
    const takeoffButton = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const missionAbortButton = document.getElementById("missionAbort");
    
    
    
    //areas
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

    //rocket image
    const rocket = document.getElementById("rocket");


    takeoffButton.addEventListener("click",function(){
        let shouldTakeOff = confirm("Confirm that the shuttle is ready for takeoff.")
        if(shouldTakeOff){
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            altitude = 10000;
            spaceShuttleHeight.innerHTML = altitude;
            rocketPosX += 10;
            rocket.style.marginBottom = rocketPosX + "px";
        }
    })

    landButton.addEventListener("click",function(){
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        resetRocket();
    });

    missionAbortButton.addEventListener("click",function(){
        let wantAbortMission = confirm("Confirm that you want to abort the mission");
        if (wantAbortMission){
            flightStatus.innerHTML = "Mission aborted.";
            resetRocket();
        }
    });

    document.addEventListener("click",function(event) {
        //console.log(event.target.id);

        let backgroundWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue("width"));
        //https://cloud.tencent.com/developer/article/1136628 (About getComputedStyle and getPropertyValue)
        

        if(event.target.id === "left" && rocketPosX > -(backgroundWidth/2 -40)){
            rocketPosX -= 10;
            rocket.style.marginLeft = rocketPosX + "px";

        }

        if(event.target.id === "right" && rocketPosX < (backgroundWidth/2 -40)){
            rocketPosX += 10;
            rocket.style.marginLeft = rocketPosX + "px";
        }

        if(event.target.id === "up" && altitude < 250000){
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + "px";
            altitude += 10000;
            spaceShuttleHeight.innerHTML = altitude;
        }
        if(event.target.id === "down" && altitude > 0){
            rocketPosY -= 10;
            rocket.style.marginBottom = rocketPosY + "px";
            altitude -=10000;
            spaceShuttleHeight.innerHTML = altitude;
            
        }
    })

    function resetRocket(){
        shuttleBackground.style.backgroundColor = "green";
        altitude = 0;
        spaceShuttleHeight.innerHTML = altitude;
        rocketPosX = 0;
        rocketPosY = 0;
        rocket.style.marginLeft = rocketPosX + "px";
        rocket.style.marginBottom = rocketPosY + "px";
    }




});