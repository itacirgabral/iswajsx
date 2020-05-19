function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 9h15v13H9z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M11 11h11v9H11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 7h2V4c0-3.99-4-4-4-4H8s4 0 0 0-4 4-4 4h2s0 2 0 0 2-2 2-2h2s-2 0 0 0 2 2 2 2v3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 7s0 4 0 0-4-4-4-4H4s4 0 0 0-4 4-4 4v2h2V7s0 2 0 0 2-2 2-2h3S5 5 7 5s2 2 2 2h2zM0 9s0 4 4 4h4v-2H4s-2 0-2-2H0z"
}));

export default SvgComponent;