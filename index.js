
let dv = document.querySelector(".words") ;

function blink(){
    let k = document.querySelectorAll(".dot");
    k.forEach( (e)=>{
        e.classList.toggle("dotstyle");
    })
}

async function dots(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('<p class="dot dotstyle">.</p>');
        },500)
    })
}
async function adddots(){
    let b = await dots();
    dv.innerHTML = dv.innerHTML + b ;
    b = await dots();
    dv.innerHTML = dv.innerHTML + b ;
    b = await dots();
    dv.innerHTML = dv.innerHTML + b ;
    b = await dots();
    dv.innerHTML = dv.innerHTML + b ;
    return new Promise((resolve,reject)=>{
        resolve("");
    }) 
}
async function fun(st){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(st)
    }, 2000 )
   })
}

async function solve(){
    let b = await fun("<p> Reading ")
    dv.innerHTML = dv.innerHTML + b ; 
    b = await fun("Your File ")
    dv.innerHTML = dv.innerHTML + b ; 
    await adddots();
    b = await fun("<br><p>Initializing ");
    dv.innerHTML = dv.innerHTML + b ; 
    b = await fun("Hacking</p> ")
    dv.innerHTML = dv.innerHTML + b ; 
    await adddots();
    b = await fun("<br><p>PassWord Files Detected</p>");
    dv.innerHTML = dv.innerHTML + b ;
    await adddots();
    b = await fun("<br><p>Sending The Files To Server</p>");
    dv.innerHTML = dv.innerHTML + b ;
    await adddots();
}

solve() ;
setInterval(blink , 1000);


// async function solve(){
//     let b = await fun("<p><b> Reading Your Files</b>")
//     dv.innerHTML = dv.innerHTML + b ; 
//     await adddots();
//     let k = setInterval( blink , 1000 );
//     b = await fun("<br><p><b> Initializing Hacking</b></p>");
//     dv.innerHTML = dv.innerHTML + b ; 
//     clearInterval(k);
//     await adddots();
//     k=setInterval( blink , 1000 );
//     b = await fun("<br><p><b>PassWord Files Detected</b></p>");
//     dv.innerHTML = dv.innerHTML + b ;
//     clearInterval(k);
//     await adddots();
//     k=setInterval( blink , 1000 );
//     b = await fun("<br><p><b>Sending The Files To Server</b></p>");
//     dv.innerHTML = dv.innerHTML + b ;
//     clearInterval(k);
//     await adddots();
//     k=setInterval( blink , 1000 );
// }

// line height 
// 
