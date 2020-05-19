function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 6h15v13H9z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M11 8h6v9h-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 0C0 0 0 5 0 5h2c0-3 3-3 3-3h1c1.832 0 2.535 1.129 2.813 2h2.093C10.282.012 6 0 6 0H5zM0 5c0 5 5 5 5 5h3V8H5C2 8 2 5 2 5H0z"
}));

export default SvgComponent;