function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 13,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6.5.5L0 7h2.719l3.719-3.75L10.188 7H13L6.5.5zM3 7h2v15H3V7zM8 7h2v15H8V7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 7v15h3V7H5z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.5 10a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
}));

export default SvgComponent;