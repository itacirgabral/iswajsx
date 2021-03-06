function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 8h15v15H0zM11 8H9V3s0 1 0 0-1-1-1-1H2V0h6S5 0 8 0s3 3 3 3v5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 4h4v4H3z"
}));

export default SvgComponent;