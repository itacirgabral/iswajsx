function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16.21.997l1.035 3.864L1.79 9.002.755 5.138 16.21.998z"
}));

export default SvgComponent;