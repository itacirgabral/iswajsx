function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 17h15v13H0z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M2 19h11v9H2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.406 3.406L15 15h-2.812L1.969 4.812l1.437-1.406z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 0h2v15H7z"
}));

export default SvgComponent;