function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 3v15h8V3h-8z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M16 4h3v13h-3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 3v2h6V3H0zm10 0v2h5V3h-5zM0 6v3h15V6H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.219.531l-1.719 1L15 18v-3.969L7.219.531z"
}));

export default SvgComponent;