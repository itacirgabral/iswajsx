function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 48
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13.297.17l4.83 1.295L5.704 47.829l-4.83-1.294L13.297.171z"
}));

export default SvgComponent;