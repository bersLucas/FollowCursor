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
// eslint-disable-next-line no-unused-vars
const followCursor = (elemList, scale = 10) => {
  // Init
  const boxSizes = [];
  const $elems = Array.from(elemList);

  let counter = 0;
  let scrollPos = window.pageYOffset
  || document.documentElement.scrollTop
  || document.body.scrollTop
  || 0;


  // Get the absolute distance of an element
  // from the top of page
  const getElemDistance = (elem) => {
    let currentElem = elem;
    let location = 0;
    if (currentElem.offsetParent) {
      do {
        location += currentElem.offsetTop;
        currentElem = currentElem.offsetParent;
      } while (currentElem);
    }
    return location >= 0 ? location : 0;
  };

  // Function to add prefixes to transform rules
  const transformCSS = (perspective, rotateX, rotateY) => `perspective(${perspective}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;

  // Applied to every element in $elems
  $elems.forEach((img) => {
    counter += 1;

    // Bounding box
    const box = img.getBoundingClientRect();

    // Object with data for element's position
    boxSizes[counter] = {
      left: box.left,
      width: box.width,
      top: getElemDistance(img),
      height: box.height,
      obj: img,
      previousTransform: getComputedStyle(img).transform === 'none' ? '' : getComputedStyle(img).transform,
    };

    // Apply a counter to find key in boxSizes array
    img.setAttribute('data-mouserotate', counter);

    // Applied on mouse over
    img.addEventListener('mousemove', (e) => {
      // get key
      const count = e.currentTarget.getAttribute('data-mouserotate');

      // Cursor's X position in relation to the element (0-1)
      const xPos = (e.clientX - boxSizes[count].left) / boxSizes[count].width;

      // Cursor's Y position in relation to the element (0-1)
      const yPos = ((scrollPos + e.clientY) - boxSizes[count].top) / boxSizes[count].height;

      // Rotation calculation
      let rotateY = (scale * -1) + (xPos * (scale * 2));
      let rotateX = scale - (yPos * scale * 2);

      // Limit rotation to scale
      if (rotateY > scale) { rotateY = scale; }
      if (rotateY < (scale * -1)) { rotateY = (scale * -1); }
      if (rotateX > scale) { rotateX = scale; }
      if (rotateX < (scale * -1)) { rotateX = (scale * -1); }

      // Apply rotation
      // eslint-disable-next-line no-param-reassign
      img.style.transform = boxSizes[img.getAttribute('data-mouserotate')].previousTransform
        + transformCSS(boxSizes[count].height, rotateX.toFixed(3), rotateY.toFixed(3));
    });
  });

  // Reset element's information
  // (On resize or scroll)
  const resetSizes = () => {
    boxSizes.forEach((box, i) => {
      const boxRect = box.obj.getBoundingClientRect();
      boxSizes[i].left = boxRect.left;
      boxSizes[i].width = boxRect.width;
      boxSizes[i].height = boxRect.height;
      boxSizes[i].top = getElemDistance(box.obj);
    }, 0);

    scrollPos = window.pageYOffset
    || document.documentElement.scrollTop
    || document.body.scrollTop
    || 0;

    return boxSizes;
  };

  window.onscroll = resetSizes;
  window.onresize = resetSizes;
};
