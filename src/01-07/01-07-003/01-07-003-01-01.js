function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 15v15h8V15h-8z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M11 16h6v13h-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 0v15h2V0h-2zM9.5 2L7.781 3l6.938 12H16v-1.719L9.5 2zM0 17v-2h10v2H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.625 8.625l-1.406 1.438L8.188 15H11L4.625 8.625zM.844 23.469l-.5 1.937L10 28v-2.094L.844 23.47z"
}));

export default SvgComponent;