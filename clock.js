window.addEventListener("load",(e)=>{


    const timeSection = document.querySelector("#time")
    const dateSection = document.querySelector("#date")

    setInterval(()=>{

     let hours = new Date().getHours();
     let mins = new Date().getMinutes();
     let seconds = new Date().getSeconds();
     
     hours = hours<10? "0"+hours:hours;
     mins = mins<10? "0"+mins:mins;
     seconds = seconds<10? "0"+seconds:seconds;
     timeSection.innerHTML = hours+":"+mins+":"+seconds;

     let date = Date().split(" ");
    dateSection.innerHTML=date[0]+", "+date[1]+" "+date[2]
    },1000)



})