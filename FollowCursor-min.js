"use strict"
var followCursor=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:10,o=[],n=Array.from(t),s=0,i=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0
n.reduce(function(t,n){s+=1
var r=n.getBoundingClientRect()
o[s]={left:r.left,width:r.width,top:getElemDistance(n),height:r.height,obj:n,classes:n.getAttribute("style")},null===o[s].classes?o[s].classes="":o[s].classes+=";",n.setAttribute("data-mouserotate",s),n.onmousemove=function(t){var s=this.getAttribute("data-mouserotate"),r=(t.clientX-o[s].left)/o[s].width,l=(i+t.clientY-o[s].top)/o[s].height,c=-1*e+r*(2*e),a=e-2*(l*e)
c>e&&(c=e),-1*e>c&&(c=-1*e),a>e&&(a=e),-1*e>a&&(a=-1*e),n.setAttribute("style",o[s].classes+" transform: perspective("+o[s].height+"px) rotateY("+c+"deg) rotateX("+a+"deg)")}},0)
var r=function(){o.reduce(function(t,e,n){var s=e.obj.getBoundingClientRect()
o[n].left=s.left,o[n].width=s.width,o[n].height=s.height,o[n].top=getElemDistance(e.obj)},0),i=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}
window.onscroll=r,window.onresize=r},getElemDistance=function(t){var e=0
if(t.offsetParent)do e+=t.offsetTop,t=t.offsetParent
while(t)
return e>=0?e:0}