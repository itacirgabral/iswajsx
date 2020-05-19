function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 3v2h10V3H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 4c0-2.21-2.239-4-5-4H9v1h1a3 3 0 010 6H9v1h1c2.761 0 5-1.79 5-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 4a2 2 0 104 0 2 2 0 10-4 0z"
}));

export default SvgComponent;