function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14 17h15v13H14z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M16 19h11v9H16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 15H0v2h13v-2zM16 15V0h-2v15h2zM5 17l8 8v-2.813L7.844 17H5z"
}));

export default SvgComponent;