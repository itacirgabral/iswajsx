function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1 0v5a3 3 0 003 3h12v3H5a5 5 0 01-5-5V0h1z"
}));

export default SvgComponent;