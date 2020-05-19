function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 32
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.5 10.5L11 16H0l5.5-5.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 0c2.761 0 5 5.373 5 12v9c0 6.075-2.015 11-4.5 11h-2c-2.448 0-4.505-3.775-5.219-9h5.063c.431 4.176 1.232 7 2.156 7 1.38 0 2.5-6.268 2.5-14S11.88 2 10.5 2c-.96 0-1.773 3.047-2.188 7.5H3.157C3.828 4.071 6.634 0 10 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.5 16.5L11 22H0l5.5-5.5z"
}));

export default SvgComponent;