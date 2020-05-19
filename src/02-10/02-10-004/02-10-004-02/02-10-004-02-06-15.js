function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 0v2l-3.5 3.5L16 9v2l-5.5-5.5L16 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 10c0-2.402 4.079-4.425 9.5-4.906v1.281C5.058 6.872 2 7.85 2 9c0 1.657 6.268 3 14 3s14-1.343 14-3c0-1.106-2.833-2.05-7-2.563V5.095c5.118.385 9 2.2 9 4.406v2c0 3.038-5.82 4.5-13 4.5h-7c-6.627 0-12-2.134-12-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 0v2l-3.5 3.5L22 9v2l-5.5-5.5L22 0z"
}));

export default SvgComponent;