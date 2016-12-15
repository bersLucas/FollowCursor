# FollowCursor
## Usage
####HTML
```html
<script src="path/to/FollowCursor.js"></script>
```
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
