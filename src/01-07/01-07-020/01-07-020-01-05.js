function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 17h15v13H2z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M4 19h6v9H4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 15V0h-2v15h2zM2 8L.594 9.406 6.187 15H9L2 8z"
}));

export default SvgComponent;