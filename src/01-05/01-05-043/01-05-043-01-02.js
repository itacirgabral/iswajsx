function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 8A8 8 0 110 8a8 8 0 1116 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 2a6 6 0 100 12V2z",
  fill: "#fff"
}));

export default SvgComponent;