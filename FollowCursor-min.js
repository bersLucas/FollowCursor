"use strict"
var followCursor=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:10,o=[],n=Array.from(t),i=0
n.reduce(function(t,n){i+=1
var r=n.getBoundingClientRect()
o[i]={left:r.left,width:r.width,top:getElemDistance(n),height:r.height,obj:n},n.setAttribute("data-mouserotate",i),n.onmousemove=function(t){var i=this.getAttribute("data-mouserotate"),r=(t.clientX-o[i].left)/o[i].width,a=(document.documentElement.scrollTop+t.clientY-o[i].top)/o[i].height,s=-1*e+r*(2*e),u=e-2*(a*e)
s>e&&(s=e),-1*e>s&&(s=-1*e),u>e&&(u=e),-1*e>u&&(u=-1*e),n.setAttribute("style","transform: perspective("+o[i].height+"px) rotateY("+s+"deg) rotateX("+u+"deg)")}},0)
var r=function(){o.reduce(function(t,e){var o=e.obj.getBoundingClientRect()
e.left=o.left,e.width=o.width,e.height=o.height,e.top=getElemDistance(e.obj)},0)}
window.onscroll=r,window.onresize=r},getElemDistance=function(t){var e=0
if(t.offsetParent)do e+=t.offsetTop,t=t.offsetParent
while(t)
return e>=0?e:0}
