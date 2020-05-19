function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 37
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M21 15l-5.5 5.5L10 15h11zm-2.438 1h-6.125l3.063 3.063L18.563 16zM12 6a5 5 0 015 5v4h-3v-5a3 3 0 00-3-3H0V6h12z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 0H9v37h1V0zM21 29l-5.5 5.5L10 29h11zm-2.438 1h-6.125l3.063 3.063L18.563 30zM6 0H5v37h1V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 20a5 5 0 015 5v4h-3v-5a3 3 0 00-3-3H0v-1h12z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 0H6v37h3V0zM18.563 30L15.5 33.063 12.437 30h6.126zM18.563 16L15.5 19.063 12.437 16h6.126z",
  fill: "#fff"
}));

export default SvgComponent;