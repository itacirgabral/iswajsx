function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 34
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0L0 8h16L8 0zM4 8v26l20-20-1.406-1.406L6 29.187V8H4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 8v11.5l9.75-9.75-1.406-1.406L12 14.688V8h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 8v21.188l16.594-16.594L19.75 9.75 10 19.5V8H6z",
  fill: "#fff"
}));

export default SvgComponent;