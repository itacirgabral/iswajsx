function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 3h15v15H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 1C2 1 2 2 2 2v9h2V2s0-1-1-1zm3 0C5 1 5 2 5 2v9h2V2s0-1-1-1zm3 0C7.989 1 8 2 8 2v9h2V2s0-1-1-1z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 0S1 0 1 2v10h4V2s0-2-2-2zm0 1c1 0 1 1 1 1v9H2V2s0-1 1-1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 0S4 0 4 2v10h4V2s0-2-2-2zm0 1c1 0 1 1 1 1v9H5V2s0-1 1-1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 0S7 0 7 2v10h4V2s0-2-2-2zm0 1c1 0 1 1 1 1v9H8V2s0-1 1-1z"
}));

export default SvgComponent;