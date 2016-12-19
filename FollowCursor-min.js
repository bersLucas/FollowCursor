var followCursor=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:10,o=[]
if(void 0!==Array.from)Array.from(e)
else for($elems=[],i=0;i<e.length;i++)$elems[i]=e[i]
var n=0,s=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0
$elems.reduce(function(e,i){n+=1
var r=i.getBoundingClientRect()
o[n]={left:r.left,width:r.width,top:getElemDistance(i),height:r.height,obj:i,classes:i.getAttribute("style")},null===o[n].classes?o[n].classes="":o[n].classes+=";",i.setAttribute("data-mouserotate",n),i.onmousemove=function(e){var n=this.getAttribute("data-mouserotate"),r=(e.clientX-o[n].left)/o[n].width,l=(s+e.clientY-o[n].top)/o[n].height,a=-1*t+r*(2*t),c=t-2*(l*t)
a>t&&(a=t),-1*t>a&&(a=-1*t),c>t&&(c=t),-1*t>c&&(c=-1*t),i.setAttribute("style",o[n].classes+" transform: perspective("+o[n].height+"px) rotateY("+a+"deg) rotateX("+c+"deg)")}},0)
var r=function(){o.reduce(function(e,t,n){var i=t.obj.getBoundingClientRect()
o[n].left=i.left,o[n].width=i.width,o[n].height=i.height,o[n].top=getElemDistance(t.obj)},0),s=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}
window.onscroll=r,window.onresize=r},getElemDistance=function(e){var t=0
if(e.offsetParent)do t+=e.offsetTop,e=e.offsetParent
while(e)
return t>=0?t:0}