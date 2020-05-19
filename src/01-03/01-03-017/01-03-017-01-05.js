function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 17h14v13H0z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M2 19h6v9H2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 3h2v12h-2zM10 0H8v15h2V0zM16 15v9s0 3-1 3v3s3 0 3-5V15h-2z"
}));

export default SvgComponent;