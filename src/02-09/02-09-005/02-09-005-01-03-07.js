function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 6a5 5 0 015 5v2a5 5 0 01-5 5H3v-3h12a3 3 0 003-3v-2a3 3 0 00-3-3H6V6h9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 1v2L2.5 6.5 6 10v2L.5 6.5 6 1zM13 0v15h1V0h-1zm0 18v6h1v-6h-1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 0v15h3V0h-3zm0 18v6h3v-6h-3z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 0v15h1V0H9zm0 18v6h1v-6H9z"
}));

export default SvgComponent;