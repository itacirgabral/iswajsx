function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13.364 2.05L2.05 13.364.636 11.95 11.95.636l1.414 1.414z"
}));

export default SvgComponent;