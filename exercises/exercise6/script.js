console.log('dark mode');

//------------------------------------
// Wait for the DOM to fully load
//------------------------------------
document.addEventListener("DOMContentLoaded", function () {

  //------------------------------------
  // show hide each item
  //------------------------------------
  
  

  //------------------------------------
  // adds a darkmode class to the body
  //------------------------------------
  const darkModeButton = document.getElementById('darkmode');
  darkModeButton.addEventListener('click', function() {
    document.body.classList.toggle('darkmode');
  });

});


