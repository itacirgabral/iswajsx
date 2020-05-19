function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 6v15h8V6h-8z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M16 7h6v13h-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.344.344L9.219 2.469 11.75 5H16L11.344.344zM0 6h13v4H0zM7 10l6 6v-2.813L9.812 10H7z"
}));

export default SvgComponent;