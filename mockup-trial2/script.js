const myElement = document.getElementById('myElement');

function toggleVisibility() {
    
    if (myElement.style.display === 'none' || myElement.style.display === '') {
        myElement.style.display = 'block'; 
        
        setTimeout(() => {
            myElement.style.display = 'none'; 
        }, 10000); // 
    } else {
        myElement.style.display = 'none'; 
    }
}


setInterval(toggleVisibility, 5000); 


toggleVisibility();




