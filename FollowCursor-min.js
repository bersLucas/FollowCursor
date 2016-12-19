var followCursor=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:10,o=[],n=[]
if(void 0!==Array.from)n=Array.from(t)
else for(n=[],i=0;i<t.length;i++)n[i]=t[i]
var s=0,r=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0
n.reduce(function(t,i){s+=1
var n=i.getBoundingClientRect()
o[s]={left:n.left,width:n.width,top:getElemDistance(i),height:n.height,obj:i,classes:i.getAttribute("style")},null===o[s].classes?o[s].classes="":o[s].classes+=";",i.setAttribute("data-mouserotate",s),i.onmousemove=function(t){var n=this.getAttribute("data-mouserotate"),s=(t.clientX-o[n].left)/o[n].width,l=(r+t.clientY-o[n].top)/o[n].height,a=-1*e+s*(2*e),c=e-2*(l*e)
a>e&&(a=e),-1*e>a&&(a=-1*e),c>e&&(c=e),-1*e>c&&(c=-1*e),i.setAttribute("style",o[n].classes+" transform: perspective("+o[n].height+"px) rotateY("+a+"deg) rotateX("+c+"deg)")}},0)
var l=function(){o.reduce(function(t,e,i){var n=e.obj.getBoundingClientRect()
o[i].left=n.left,o[i].width=n.width,o[i].height=n.height,o[i].top=getElemDistance(e.obj)},0),r=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}
window.onscroll=l,window.onresize=l},getElemDistance=function(t){var e=0
if(t.offsetParent)do e+=t.offsetTop,t=t.offsetParent
while(t)
return e>=0?e:0}