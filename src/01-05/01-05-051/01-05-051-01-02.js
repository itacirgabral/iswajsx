function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 0v15h8V0h-8z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M16 1h3v13h-3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 0h15v4H0zM4.75 6.781l-1 1.719L15 15v-2.281L4.75 6.78z"
}));

export default SvgComponent;