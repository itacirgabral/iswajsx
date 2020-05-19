function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.5.5L0 6h1.5l4-4 4 4H11L5.5.5zM6 6v5a3 3 0 003 3h12v3H10a5 5 0 01-5-5V6h1z"
}));

export default SvgComponent;