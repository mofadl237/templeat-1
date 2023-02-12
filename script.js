// var x=document.querySelector(".icon");
// var y=document.querySelector("ul")
// x.onclick=function(){
//       y.style.display="block"
// }
var sp=document.getElementById("two")
var btn=document.querySelector(".icon")
var div=document.querySelector("ul")
var fun =function(){
      div.style.display="block"
      sp.style.width="100%"
}
btn.addEventListener("mousemove",fun)