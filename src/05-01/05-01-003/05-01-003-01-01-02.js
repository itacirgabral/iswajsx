function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 53,
  height: 9
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 4h42v4H0V4zM44 0v7.071h1.016V1.016h6.055V0H44z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M45.414 4.243l.707-.707 4.243 4.242-.707.707-4.243-4.242zM47.536 2.121l.707-.707 4.242 4.243-.707.707-4.242-4.243z"
}));

export default SvgComponent;