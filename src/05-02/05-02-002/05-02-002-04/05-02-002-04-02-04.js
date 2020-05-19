function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 39,
  height: 38
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.298.261L.762 3.797l33.941 33.941 3.536-3.536L4.298.262z"
}));

export default SvgComponent;