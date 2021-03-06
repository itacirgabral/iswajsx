function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 14h15v13H3z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M5 16h6v9H5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.969-.031l-1.5 1.5L15 12h3L5.969-.031z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.094 5.844L.406 7.719 12.156 12H18L1.094 5.844zM24.375 12.813L19 18.186V21l6.781-6.781-1.406-1.406z"
}));

export default SvgComponent;