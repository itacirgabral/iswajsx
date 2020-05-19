function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 8h8v18h-8z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M11 9h6v16h-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 6c-5 0-5 5-5 5v3h3v-2c0-2 2-2 2-2h4V6H5zM16.092 7.017L18 7V0h-7v5h2V3h3l.092 4.017z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.969 3.281l-1.907.5L9 22.25v-7.688L5.969 3.283z"
}));

export default SvgComponent;