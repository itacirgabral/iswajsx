function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 9,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 14h2V0H0v8h2V2h4v12z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 0v14h1V0H8zM2 2v6H0v1h3V3h2v11h1V2H2z",
  fill: "#fff"
}));

export default SvgComponent;