function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 15h15v15H9z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M11 17h6v11h-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 12s-3 0-3 3v3h2v-3c0-1 1-1 1-1h5c1 0 1 1 1 1h2s0-3-3-3H3zM15 15h2V0h-2v15z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.594 8.906L0 10.406 9 26v-6L2.594 8.906z"
}));

export default SvgComponent;