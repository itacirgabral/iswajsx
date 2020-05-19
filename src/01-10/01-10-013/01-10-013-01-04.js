function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0h15v15H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 2v4H0v2h2v5h11V8h2V6h-2V2H2z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 2v6h2V2H4zm5 0v6h2V2H9z"
}));

export default SvgComponent;