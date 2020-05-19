function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 12h15v15H3z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M5 14h6v11H5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.969-.031l-1.5 1.5L15 12h3L5.969-.031z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.094 5.844L.406 7.719 12.156 12H18L1.094 5.844z"
}));

export default SvgComponent;