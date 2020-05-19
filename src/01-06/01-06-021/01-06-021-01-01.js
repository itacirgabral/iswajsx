function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 6h15v15H5z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M7 8h11v11H7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.406.594L0 2l5 5V6h1.813L1.405.594zM24.594 9.594L20 14.188V17l6-6-1.406-1.406z"
}));

export default SvgComponent;