let events = document.getElementsByTagName("input");
console.log(events);
let event1 = [];
for(let i=0; i<events.length; i++){
    events[i].addEventListener("keyup",(x)=>{
        event1.push(x+" ");
    })
}
function register(){
    let g=0;
    let detail = document.getElementsByTagName("input");
    for(i=0;i<detail.length; i++){
        if (detail[i].value=="" && g == 0){
            let place = document.getElementsByClassName("error");
            let newpar = document.createElement("h1");
            let newco = document.createTextNode("error");
            newpar.appendChild(newco);
            place[0].appendChild(newpar);
            g=1;
        }
    }
        if (g == 0){
            let place1 = document.getElementsByClassName("success");
            let newpar1 = document.createElement("h1");
            let newco1 = document.createTextNode("success");
            newpar1.appendChild(newco1);
            place1[0].appendChild(newpar1);
        }
        
}
function reset(){
    let detail = document.getElementsByTagName("input");
    for(let i=0; i<detail.length; i++){
        detail[i].value="";
    }
    
}
