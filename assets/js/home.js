// var sections = document.querySelectorAll('section');
// var navLink =  document.querySelectorAll('header nav a');


// window.onscroll = () => {
//   sections.forEach(sec => {
//      var top = window.scrollY;
//      var offset = sec.offsetTop - 150;
//      var height = sec.offsetHeight;
//      var id = sec.getAttribute('id');

//      if(top >= offset && top < offset + height){
//         navLink.forEach(links =>{
//           links.classList.remove('active');
//           document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//         });
//      };
//   });
// };


function Opan(){
    uldata = document.getElementById("teb")
    uldata.style.display="block"
    bardata = document.getElementById("bar")
    bardata.style.display="none"
    closedata = document.getElementById("close")
    closedata.style.display="block"
}
