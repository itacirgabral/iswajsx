function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 46,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 0v5L0 4v2l12 3V3l31 7h3V5L9 0z"
}));

export default SvgComponent;