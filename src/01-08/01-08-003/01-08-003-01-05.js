function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 11c-6.125 0-6.904 4.602-7 5.75V17c0 6 6 6 6 6h3v-2h-3c-4 0-4-4-4-4 0-4 5-4 5-4 1.246 0 2.218.278 3 .688v11.156c-1.462.889-3.04 1.11-3.688 1.156H12c-1.098 0-2.094-.099-3-.281L8.5 27.5c2.009.486 3.5.5 3.5.5 9 0 9-9 9-9 0-8-8-8-8-8zM1.906 20.719L0 21.812c1.718 2.745 4.282 4.276 6.594 5.125l.468-1.78c-2.5-.972-4.114-2.665-5.156-4.438z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 13s-5 0-5 4c0 0 0 4 4 4h3v2h1v-9.313c-.782-.41-1.754-.687-3-.687z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 0v10.813a8.655 8.655 0 012 1.843V0h-2zM8 3v7.156a8.324 8.324 0 012-.812V3H8zM2 9L.594 10.406l3.937 3.938a8.354 8.354 0 01.938-1.875L2 9z"
}));

export default SvgComponent;