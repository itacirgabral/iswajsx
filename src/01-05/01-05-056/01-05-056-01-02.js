function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 4v15h8V4h-8z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M16 5h3v13h-3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 4h15v4H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.219-.188L4.5.813 15 19v-3.969L6.219-.188z"
}));

export default SvgComponent;