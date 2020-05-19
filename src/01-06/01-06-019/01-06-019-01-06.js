function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 8h15v15H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 12v3H0v-3h15z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 0c4 0 4 4 4 4 0 5-4 8-4 8V8h-1c2-2 2-4 2-4 0-2-1-2-1-2-1 0-1.129 1.01-1 1v1h-2V3c0-3 3-3 3-3z"
}));

export default SvgComponent;