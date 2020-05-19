function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M23 0v20H2V3H0v19h25V0h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 0v14H8V3H6v13h13V0h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 0v16H6V3H2v17h21V0h-4z",
  fill: "#fff"
}));

export default SvgComponent;