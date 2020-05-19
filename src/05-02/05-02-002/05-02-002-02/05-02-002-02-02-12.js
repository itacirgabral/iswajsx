function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M23.046.919l3.536 3.535L3.955 27.081.419 23.546 23.046.919z"
}));

export default SvgComponent;