function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 7v15h8V7H9z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M10 8h6v13h-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.5.5L1.094 1.938 7 7.813V5L2.5.5zM0 20v2h7v-2H0z"
}));

export default SvgComponent;