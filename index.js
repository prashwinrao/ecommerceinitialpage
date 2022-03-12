const bar=document.getElementById('bar')
const nobar=document.getElementById('close')
const nav=document.getElementById('navbar')

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(nobar){
    nobar.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}

var a=4
var b=2




