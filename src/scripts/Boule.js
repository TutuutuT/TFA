var boule = document.querySelector('.boule');
window.addEventListener('mousemove', (e)=>{
    let leftPos = e.pageX;
    let topPos = e.pageY;
    boule.style.left= leftPos+'px';
    boule.style.top= topPos+'px';

})