# FollowCursor
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
#### Created on Chrome 55 on Mac OSX 10
Tested on

| Browser | OS | |
| ------- | --- | ------ |
| Chrome 55  | Mac OSX 10 | ✔ |
| Firefox 50  | Mac OSX 10 | ✔ |
