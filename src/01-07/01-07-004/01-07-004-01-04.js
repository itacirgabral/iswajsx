function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 15v15h8V15h-8z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M11 16h6v13h-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 0v13h2V0h-2zM9.5 2L7.781 3l5.782 10h2.28L9.5 2zM0 17v-2h8v2H0zM4.625 8.625l-1.406 1.438L6.188 13H9L4.625 8.625zM23.656 18.5L19 23.188V26l6.063-6.063-1.407-1.437z"
}));

export default SvgComponent;