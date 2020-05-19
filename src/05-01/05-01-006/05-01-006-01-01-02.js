function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 42,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 14h42v4H0v-4zM16.415 4.243l.707-.707 7.778 7.778-.707.707zM18.536 2.121l.707-.707 7.778 7.778-.707.707z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M17.122 3.536l1.414-1.415L26.314 9.9 24.9 11.314z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 0v7.071h1.016V1.016h6.055V0H15z"
}));

export default SvgComponent;