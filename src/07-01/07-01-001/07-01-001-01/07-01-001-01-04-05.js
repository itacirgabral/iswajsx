function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 74,
  height: 9
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M47 3h27V1H47v2zM26 1H0v2h26V1zM0 7h74v2H0V7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M47 1v2h27v4H0V3h26V1h21z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M34.5 0C31 0 31 4 31 4h2s0-2 1.5-2 1.5 2 4 2C42 4 42 0 42 0h-2s0 2-1.5 2-1.5-2-4-2z"
}));

export default SvgComponent;