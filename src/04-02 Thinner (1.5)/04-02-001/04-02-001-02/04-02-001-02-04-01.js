function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 4.5V6h8V4.5H0zM0 0v1.5h8V0H0zM15 4.5V6h8V4.5h-8zM15 0v1.5h8V0h-8z"
}));

export default SvgComponent;