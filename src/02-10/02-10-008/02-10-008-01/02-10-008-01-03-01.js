function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 13,
  height: 7
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6.5.5L0 7h2l4.5-4.5L11 7h2L6.5.5z"
}));

export default SvgComponent;