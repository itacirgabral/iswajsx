function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 14h15v13H0zM9 2v6h2V4h2v8h2V2H9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 12V0H1v6h2V2h2v10h2z",
  fillRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M2 16h6v9H2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 19v2h6v-6h-5v2h3v2h-4z"
}));

export default SvgComponent;