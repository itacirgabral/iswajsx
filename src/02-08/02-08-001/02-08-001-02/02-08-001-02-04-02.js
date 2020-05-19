function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M25 6H11l7 7 7-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 0a5 5 0 015 5v1h-2V5a3 3 0 00-3-3h-3C9.343 2 8 3.79 8 6v2c0 4.472 6 12 6 12H0s6-7.528 6-12V6c0-3.314 2.239-6 5-6h3z"
}));

export default SvgComponent;