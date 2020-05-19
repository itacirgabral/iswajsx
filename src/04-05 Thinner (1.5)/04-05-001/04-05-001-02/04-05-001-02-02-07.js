function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 2.25h15v1.5H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 0a2 2 0 00-2 2v2a2 2 0 004 0V2a2 2 0 00-2-2z"
}));

export default SvgComponent;