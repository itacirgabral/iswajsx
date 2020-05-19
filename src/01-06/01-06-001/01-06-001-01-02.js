function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 15h15v15H2z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M4 17h6v11H4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.594 6.406L8 15h2.813L18 7.812l-1.406-1.406z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 0h2v15H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.406 6.406L0 7.813 7.188 15H10L1.406 6.406z"
}));

export default SvgComponent;