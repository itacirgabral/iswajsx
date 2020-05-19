function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 4a8 8 0 100 16 8 8 0 000-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 6a6 6 0 100 12 6 6 0 000-12z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.844 0L0 2.813l5.781 5.78A7.995 7.995 0 018.344 5.5L2.844 0z"
}));

export default SvgComponent;