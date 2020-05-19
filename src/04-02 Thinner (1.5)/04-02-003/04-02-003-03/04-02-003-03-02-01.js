function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 0v1.5h13V0H2zM0 4.5V6h17V4.5H0z"
}));

export default SvgComponent;