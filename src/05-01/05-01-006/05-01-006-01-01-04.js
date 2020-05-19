function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 42,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M42 14H0v4h42v-4zM25.586 4.243l-.707-.707-7.778 7.778.707.707zM23.465 2.121l-.707-.707-7.779 7.778.707.707z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M24.879 3.536L23.465 2.12 15.686 9.9l1.415 1.415z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M27 0v7.071h-1.016V1.016h-6.055V0H27z"
}));

export default SvgComponent;