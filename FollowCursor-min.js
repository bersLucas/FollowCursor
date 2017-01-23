"use strict"
var followCursor=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:10,o=[],r=[]
if(void 0!==Array.from)r=Array.from(t)
else for(r=[],i=0;i<t.length;i++)r[i]=t[i]
var n=0,s=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0
r.reduce(function(t,r){n+=1
var i=r.getBoundingClientRect()
o[n]={left:i.left,width:i.width,top:getElemDistance(r),height:i.height,obj:r,classes:r.getAttribute("style")},null===o[n].classes?o[n].classes="":o[n].classes+=";",r.setAttribute("data-mouserotate",n),r.onmousemove=function(t){var n=this.getAttribute("data-mouserotate"),i=(t.clientX-o[n].left)/o[n].width,a=(s+t.clientY-o[n].top)/o[n].height,l=-1*e+i*(2*e),c=e-2*(a*e)
l>e&&(l=e),-1*e>l&&(l=-1*e),c>e&&(c=e),-1*e>c&&(c=-1*e),r.setAttribute("style",o[n].classes+"; "+transformCSS(o[n].height,c.toFixed(3),l.toFixed(3)))}},0)
var a=function(){o.reduce(function(t,e,r){var n=e.obj.getBoundingClientRect()
o[r].left=n.left,o[r].width=n.width,o[r].height=n.height,o[r].top=getElemDistance(e.obj)},0),s=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}
window.onscroll=a,window.onresize=a},getElemDistance=function(t){var e=0
if(t.offsetParent)do e+=t.offsetTop,t=t.offsetParent
while(t)
return e>=0?e:0},transformCSS=function(t,e,o){var r="transform: perspective("+t+"px) rotateY("+o+"deg) rotateX("+e+"deg);"
return r+="-webkit-transform: perspective("+t+"px) rotateY("+o+"deg) rotateX("+e+"deg);",r+="-moz-transform: perspective("+t+"px) rotateY("+o+"deg) rotateX("+e+"deg);"}
