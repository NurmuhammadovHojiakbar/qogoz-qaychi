let takror=document.querySelector("button")

takror.onclick=function(){
    let oyinchi1="state" + Math.round(Math.random()*2) + ".png"
    let oyinchi2="state" + Math.round(Math.random()*2) + ".png"
    
    document.getElementById("player1").src="img/"+oyinchi1;
    document.getElementById("player2").src="img/"+oyinchi2;


    
    if(oyinchi1==="state2.png" && oyinchi2==="state1.png"){
        document.getElementById("info").textContent="Birinchi Yutdi"
    }
    else if(oyinchi1==="state1.png" && oyinchi2==="state2.png"){
        document.getElementById("info").textContent="Ikkinchi Yutdi"
    }
    else if(oyinchi1==="state0.png" && oyinchi2==="state2.png"){
        document.getElementById("info").textContent="Birinchi Yutdi"
    }
    else if(oyinchi1==="state2.png" && oyinchi2==="state0.png"){
        document.getElementById("info").textContent="Ikkinchi Yutdi"
    }
    else if(oyinchi1==="state0.png" && oyinchi2==="state1.png"){
        document.getElementById("info").textContent="Ikkinchi Yutdi"
    }
    else if(oyinchi1==="state1.png" && oyinchi2==="state0.png"){
        document.getElementById("info").textContent="Birinchi Yutdi"
    }
    else{
        document.getElementById("info").textContent="Durrang"
    }
}