const btnSi = document.querySelector('#btnSi');

btnSi.addEventListener('click',function () {
    alert('Era obvio jaja')
    document.body.style.backgroundImage = 'url("casado.avif")';
    document.body.style.backgroundSize = 'cover';
    
    document.body.style.backgroundPosition = 'center'; 
    
    alert('Ahora soy de casados FC')
});




const btnNo = document.querySelector('#btnNo');

btnNo.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    btnNo.style.setProperty('top',randomY+'%');
    btnNo.style.setProperty('left',randomX+'%');
    btnNo.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})