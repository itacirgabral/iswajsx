function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 31
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 31V14l5-5 5 5v17H7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 11.813l-3 3V29h6V14.812l-3-3z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 4l-3.875 6.688 1.469 1.468L20.719 5 19 4zM11 0v8.563l1-.97 1 1V0h-2zM5 4L3.281 5l4.125 7.156 1.469-1.469L5 4zM1.344 10.5l-1.407 1.438L6 18v-2.813L1.344 10.5zM14 24a2 2 0 11-4 0 2 2 0 114 0z"
}));

export default SvgComponent;