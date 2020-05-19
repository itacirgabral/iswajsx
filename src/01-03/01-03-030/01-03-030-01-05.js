function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 17h15v13H9z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M11 19h6v9h-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 11s-4 0-4 4v3h3v-3c0-1 1-1 1-1h4c1 0 1 1 1 1h3s0-4-4-4H4zM15 15h2V0h-2v15z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.719 9.406l-1.719 1 8 13.875v-3.968L1.719 9.405z"
}));

export default SvgComponent;