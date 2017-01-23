/* 
 * Initialization and rotate scripts
 *
 * elemList [HTML Collection]
 * list of HTML element to apply effect to
 *
 * scale
 * scale and max rotation of the elements
 * (Default: 10, reccomended maximum: 90)
 */
const followCursor = function(elemList, scale=10) {
  //Init
  const boxSizes = [];
  let $elems = [];
  
  if (Array.from !== undefined){
    $elems = Array.from(elemList);
  }else{
    $elems = [];
    for (i=0; i<elemList.length; i++){
      $elems[i] = elemList[i];
    }
  }
  
  let counter = 0;
  let scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  
  //Applied to every element in $elems
  $elems.reduce((total,img) => {
    counter += 1;

    //Bounding box
    let box = img.getBoundingClientRect();
    
    //Object with data for element's position
    boxSizes[counter] = {
      left: box.left,
      width: box.width,
      top: getElemDistance(img),
      height: box.height,
      obj: img,
      classes: img.getAttribute("style"),
    }
    
    //Format style elements that existed before
    if (boxSizes[counter].classes === null){
      boxSizes[counter].classes = "";
    }else{
      boxSizes[counter].classes += ";"
    }
    
    //Apply a counter to find key in boxSizes array
    img.setAttribute("data-mouserotate",counter);

    //Applied on mouse over
    img.onmousemove=function(e){ 
      
      //get key
      let count = this.getAttribute("data-mouserotate");

      //Cursor's X position in relation to the element (0-1)
      let xPos = (e.clientX - boxSizes[count].left) / boxSizes[count].width;
      
      //Cursor's Y position in relation to the element (0-1)
      let yPos = ((scrollPos + e.clientY) - boxSizes[count].top) / boxSizes[count].height;

      //Rotation calculation
      let rotateY = (scale * -1) + (xPos * (scale * 2));
      let rotateX = scale - (yPos * scale * 2);

      //Limit rotation to scale
      if (rotateY > scale){rotateY = scale}
      if (rotateY < (scale * -1)){rotateY = (scale * -1)}      
      if (rotateX > scale){rotateX = scale}
      if (rotateX < (scale * -1)){rotateX = (scale * -1)}

      //Apply rotation
      img.setAttribute("style",`${boxSizes[count].classes}; ${transformCSS(boxSizes[count].height,rotateX.toFixed(3),rotateY.toFixed(3))}`);
    }
  },0);
  
  //Reset element's information
  //(On resize or scroll)
  const resetSizes = function() {
    boxSizes.reduce((total,box,i) => {
      let boxRect = box.obj.getBoundingClientRect();
      boxSizes[i].left = boxRect.left;
      boxSizes[i].width = boxRect.width;
      boxSizes[i].height = boxRect.height;
      boxSizes[i].top = getElemDistance(box.obj);
    },0);
    
    scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }
  
  window.onscroll = resetSizes;
  window.onresize = resetSizes;
};

//Get the absolute distance of an element
//from the top of page
const getElemDistance = function (elem) {
  let location = 0;
  if (elem.offsetParent) {
    do {
        location += elem.offsetTop;
        elem = elem.offsetParent;
    } while (elem);
  }
  return location >= 0 ? location : 0;
};

//Function to add prefixes to transform rules
const transformCSS = function(perspective,rotateX,rotateY){
  let css = `transform: perspective(${perspective}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg);`;
  css += `-webkit-transform: perspective(${perspective}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg);`;
  css += `-moz-transform: perspective(${perspective}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg);`;
  return css;
};