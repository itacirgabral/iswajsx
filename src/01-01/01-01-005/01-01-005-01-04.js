function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 15v4h12v-4H0zm14 0v15h8V15h-8zM2 28v2h10v-2H2zM20 0h2v13h-2z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M15 16h6v13h-6z"
}));

export default SvgComponent;