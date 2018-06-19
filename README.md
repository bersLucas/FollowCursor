# FollowCursor
![demo](https://cloud.githubusercontent.com/assets/3892772/21510105/b40b9e12-cc5d-11e6-96c8-ff424d3ad846.gif)

## Usage
### HTML
```html
<script src="node_modules/followcursor/dist/followcursor-min.js"></script>
<!--if supporting IE11-->
<script src="node_modules/babel-polyfill/dist/polyfill-min.js"></script>
```


### JS
```js
//Any list of elements
const elemList = document.querySelector("SELECTOR");

//Value from 0-90 (Default is 10 if none provided)
const scale = 50

window.onload = function () {
  followCursor(elemList, scale);
};
```
