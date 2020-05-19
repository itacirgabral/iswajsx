function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 32
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 16h2l3.5-3.5L13 16h2l-5.5-5.5L4 16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 0C2.239 0 0 5.373 0 12v9c0 6.075 2.015 11 4.5 11h2c2.448 0 4.505-3.775 5.219-9H6.656c-.431 4.176-1.232 7-2.156 7C3.12 30 2 23.732 2 16S3.12 2 4.5 2c.96 0 1.773 3.047 2.188 7.5h5.156C11.172 4.071 8.366 0 5 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 22h2l3.5-3.5L13 22h2l-5.5-5.5L4 22z"
}));

export default SvgComponent;