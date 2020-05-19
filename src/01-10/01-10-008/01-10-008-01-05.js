function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 4h15v15H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 6v4H0v3h2v4h6v-4h7v-3H8V6H2z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 6v6h2V6H4zM5 0h4v4H5z"
}));

export default SvgComponent;