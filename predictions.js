document.addEventListener('DOMContentLoaded', function() {
  
    window.addEventListener('scroll', navsticky);
  
    var navbar = document.getElementById("navbar");
  
    var sticky = navbar.offsetTop;
  
    function navsticky() {
      if (window.pageYOffset >= sticky) {
        console.log("window.pageYOffset >= sticky");
        navbar.classList.add("sticky");
      } else {
        console.log("Not window.pageYOffset >= sticky");
        navbar.classList.remove("sticky");
      }
    }
    }
  })