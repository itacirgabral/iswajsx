function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 13h15v13H11zM0 0v2h9c2 0 2 2 2 2v7h2V4s0-4-4-4H0z"
}));

export default SvgComponent;