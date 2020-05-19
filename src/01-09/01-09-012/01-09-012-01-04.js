function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 15h8v15h-8z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M11 16h6v13h-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 15c-4 0-4 4-4 4v4h2v-4c0-2 2-2 2-2h4v-2H4zM14 0h1v13h-1zM11 2h1v11h-1zM8 4h1v9H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.094 11.031L.5 12.531l7.5 13v-6l-4.906-8.5z"
}));

export default SvgComponent;