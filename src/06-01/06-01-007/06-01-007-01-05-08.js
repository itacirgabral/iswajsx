function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 33
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 3v30H0V18h13V3h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 20h11v11H2V20z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 0v2a3 3 0 000 6v2h1V0h-1zm0 3v4a2 2 0 010-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 3a2 2 0 000 4V3z",
  fill: "#fff"
}));

export default SvgComponent;