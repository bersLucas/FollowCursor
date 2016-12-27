# FollowCursor
![demo](https://cloud.githubusercontent.com/assets/3892772/21510105/b40b9e12-cc5d-11e6-96c8-ff424d3ad846.gif)

## Usage
####HTML
```html
<script src="path/to/FollowCursor.js"></script>
```
<sub>The minified version uses [Babel](https://github.com/babel/babel) to compile and [Uglyify](https://github.com/mishoo/UglifyJS2) to minify</sub>

####JS
```js
//Any list of elements
const elemList = document.querySelector("SELECTOR");

//Value from 0-90 (Default is 10 if none provided)
const scale = 50

window.onload = function () {
  followCursor(elemList, scale);
};
```

##Compatability
<sub>Note: The minified version also uses Babelfill for higher compatability.</sub>


| Browser | Version |
| ------- | --- | 
| Internet Explorer | 10+ |
| Firefox | 16+ |
| Chrome | 36+ |
| Mobile | No |
