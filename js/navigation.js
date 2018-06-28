/* Add active class to the current Nav Link (highlight it)  
var navContainer = document.getElementsByClassName("topNav");
var navLinks = navContainer.getElementsByClassName("navLink")

for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
*/
  function myFunction() {
    var x = document.getElementById("myTopNav");
    if (x.className === "topNav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}