function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 13v17s8 0 8-5v-7s0-5-8-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 14.094v14.875c1.24-.077 2.22-.3 3-.594V14.687c-1.077-.362-2.213-.532-3-.593z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 0v15l2 4V0h-2zM9 30v-2s-8 0-8-3H0c.077.077 0 5 9 5zM0 19h2s0-3 7-3v-3s-9 0-9 6z"
}));

export default SvgComponent;