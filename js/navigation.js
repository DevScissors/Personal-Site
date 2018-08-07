var navLinks = document.getElementById("myTopNav").getElementsByTagName("a");
console.log(navLinks);
var current = location.href;

// Loop through the Navigation links and add the active class to the current/clicked item
for (var i = 0; i < navLinks.length; i++) 
{
  if(navLinks[i].href == current)
  {
    navLinks[i].href="";
    navLinks[i].className="active";
  }   
}