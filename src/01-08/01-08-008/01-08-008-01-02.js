function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 15h8v15h-8z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M16 16h3v13h-3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 0h2v15h-2zM0 15h15v2H0zM15 3h2v12h-2zM10.063 7.219L8.624 8.625 15 15v-2.813L10.062 7.22zM3.938 22.969l-.532 1.937L15 28v-2.094L3.937 22.97z"
}));

export default SvgComponent;