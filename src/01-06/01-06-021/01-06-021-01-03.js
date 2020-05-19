function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 6h15v15H6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24.594.594L26 2l-5 5V6h-1.813L24.595.594zM1.406 9.594L6 14.188V17l-6-6 1.406-1.406z"
}));

export default SvgComponent;