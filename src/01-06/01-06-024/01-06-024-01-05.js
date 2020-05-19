function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 15v15h8V15h-8z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M16 16h3v13h-3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 8L8.594 9.406 12.188 13H15l-5-5zM0 15h13v3H0zM21 0h2v13h-2zM27.938 19.219L24 23.187V26l5.375-5.375-1.438-1.406z"
}));

export default SvgComponent;