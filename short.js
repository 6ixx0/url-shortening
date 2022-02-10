function myFunction() {

  
    var x = document.getElementsByClassName("one")[0];
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
      document.getElementById('harmburger').style.display = 'block';
      document.getElementById("times").style.display = "inline-flex"
   

      
       
      
  
    }
    document.getElementById("times").onclick =function()
    {
      document.getElementsByClassName("one")[0].style.display = "none"
      document.getElementById("times").style.display = "none"
    }
  }