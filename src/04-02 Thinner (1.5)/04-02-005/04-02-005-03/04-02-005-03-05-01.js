function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 9,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v2c0 2.21 2.015 4 4.5 4S9 4.21 9 2V0H0zm1 1.5h7V2c0 1.38-1.567 2.5-3.5 2.5S1 3.38 1 2v-.5z"
}));

export default SvgComponent;