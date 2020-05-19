function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 12,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 0l6 6v21H0V6l6-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 2.813l-4 4V21H0v7h12v-7h-2V6.812l-4-4z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.5 19a4.5 4.5 0 110 9 4.5 4.5 0 010-9z"
}));

export default SvgComponent;