function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 12,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 0L0 6v21h12V6L6 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 2.813l-4 4V25h8V6.812l-4-4z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 17a2 2 0 100 4 2 2 0 000-4z"
}));

export default SvgComponent;