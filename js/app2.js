const btncargar=document.getElementById("btncargar");
btncargar.addEventListener("click",()=>{
    let datos=document.getElementById("datos");
    let botones="";
    for(let i=0;i<10;i++){
        botones+=`<button onClick="funcionx(${i})">${i}</button>`
    }
    datos.innerHTML=botones;
})

function funcionx(dato){
    console.log(dato);
}