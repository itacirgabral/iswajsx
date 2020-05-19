function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 15h8v15h-8z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M16 16h6v13h-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 15h15v2H0zM18 0h2v15h-2zM13 3l-1.813.875L16.625 15H18v-1.719L13 3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 9l-1.438 1.406L13.189 15H16l-6-6zM6 17l9 9v-2.813L8.812 17H6z"
}));

export default SvgComponent;