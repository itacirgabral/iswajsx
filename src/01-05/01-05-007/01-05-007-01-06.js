function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 31
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 9l-5 5v17h10V14L9 9zM2 4L.281 5l4.282 7.438 1.468-1.47L2 4zM8 0v8.563l1-.97 1 1V0H8zM16 4l-3.875 6.688 1.469 1.468L17.719 5 16 4zM19.656 10.5L15 15.188V18l6.063-6.063-1.407-1.437z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 24a2 2 0 11-4 0 2 2 0 114 0z",
  fill: "#fff"
}));

export default SvgComponent;