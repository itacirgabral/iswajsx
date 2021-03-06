function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 6a5 5 0 00-5 5v2a5 5 0 005 5h12v-3H5a3 3 0 01-3-3v-2a3 3 0 013-3h9V6H5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 1v11l5.5-5.5L14 1zM7 0v15H6V0h1zm0 18v6H6v-6h1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 0v15H7V0h3zm0 18v6H7v-6h3z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 0v15h-1V0h1zm0 18v6h-1v-6h1z"
}));

export default SvgComponent;