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
  d: "M21 0h2v13h-2zM0 15h13v2H0zM15 3h2v10h-2zM10.063 7.219L8.624 8.625 13 13h2v-.813L10.062 7.22zM3.938 22.969l-.532 1.937L13 27.47v-2.094l-9.063-2.406z"
}));

export default SvgComponent;