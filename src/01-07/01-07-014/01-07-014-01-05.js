function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M21 18a8 8 0 11-16 0 8 8 0 1116 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 12a6 6 0 000 12V12z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 0v10a9.978 9.978 0 012-1.188V0H7zM1.406 6.406L0 7.813l4.656 4.656c.371-.56.809-1.059 1.282-1.531L1.405 6.405z"
}));

export default SvgComponent;