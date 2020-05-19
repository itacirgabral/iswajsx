function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12.5 9.5L18 4v11l-5.5-5.5zm1.438 0L17 12.563V6.436L13.937 9.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 5c0-2.761 5.373-5 12-5h9c6.075 0 11 2.015 11 4.5v2c0 3.038-5.82 5.5-13 5.5V6.937c6.282-.246 11-1.241 11-2.437C30 3.12 23.732 2 16 2S2 3.12 2 4.5c0 1.097 3.995 2.007 9.5 2.344V12C5.108 11.845 0 8.767 0 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.938 9.5L17 6.437v6.125L13.937 9.5z",
  fill: "#fff"
}));

export default SvgComponent;