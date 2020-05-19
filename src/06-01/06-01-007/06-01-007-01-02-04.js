function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 31,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 0v29l16.25-16.25-1.406-1.438L9 24.188V5h22V0H7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 0v29H0v1h13v1h-2c0 2.21-2.015 4-4.5 4h3.25c1.068-.722 1.848-1.77 2.125-3H14v-3H8.437l16.25-16.25-2.843-2.844L10 21.75V6h21V5H9v19.156l12.844-12.843 1.406 1.437L7 29V0H6zm.5 35C4.015 35 2 33.21 2 31H0v1h1.125c.277 1.23 1.057 2.278 2.125 3H6.5zm-3-4c0 1.38 1.343 2.5 3 2.5s3-1.12 3-2.5h-6z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 31h2c0 2.21 2.015 4 4.5 4s4.5-1.79 4.5-4h2v-1H0v1zm3.5 0h6c0 1.38-1.343 2.5-3 2.5s-3-1.12-3-2.5z"
}));

export default SvgComponent;