function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 29
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1 14h15v15H1zM2 0L.5 1.5 13 14h3L2 0z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M3 16h6v11H3z"
}));

export default SvgComponent;