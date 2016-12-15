"use strict"
var followCursor=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:10,o=[],i=Array.from(t),n=0
i.reduce(function(t,i){n+=1
var r=i.getBoundingClientRect()
o[n]={left:r.left,width:r.width,top:getElemDistance(i),height:r.height,obj:i},i.setAttribute("data-mouserotate",n),i.onmousemove=function(t){var n=this.getAttribute("data-mouserotate"),r=(t.clientX-o[n].left)/o[n].width,a=(document.body.scrollTop+t.clientY-o[n].top)/o[n].height,s=-1*e+r*(2*e),l=e-2*(a*e)
s>e&&(s=e),-1*e>s&&(s=-1*e),l>e&&(l=e),-1*e>l&&(l=-1*e),i.setAttribute("style","transform: perspective("+o[n].height+"px) rotateY("+s+"deg) rotateX("+l+"deg)")}},0)
var r=function(){console.log(o),o.reduce(function(t,e){var o=e.obj.getBoundingClientRect()
e.left=o.left,e.width=o.width,e.height=o.height,e.top=getElemDistance(e.obj)},0)}
window.onscroll=r,window.onresize=r},getElemDistance=function(t){var e=0
if(t.offsetParent)do e+=t.offsetTop,t=t.offsetParent
while(t)
return e>=0?e:0}
