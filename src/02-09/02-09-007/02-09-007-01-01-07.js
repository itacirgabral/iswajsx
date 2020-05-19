function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 40
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 6v1h10a3 3 0 013 3v2a3 3 0 01-3 3H5v3h11a5 5 0 005-5v-2a5 5 0 00-5-5H6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 1v11L.5 6.5 6 1zM14 0v15h1V0h-1zm0 18v13h1V18h-1zm0 16v6h1v-6h-1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 22v1h11a3 3 0 013 3v2a3 3 0 01-3 3H6v3h10a5 5 0 005-5v-2a5 5 0 00-5-5H5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 0v15h3V0h-3zm0 18v13h3V18h-3zm0 16v6h3v-6h-3z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 27v11L.5 32.5 6 27zM10 0v15h1V0h-1zm0 18v13h1V18h-1zm0 16v6h1v-6h-1z"
}));

export default SvgComponent;