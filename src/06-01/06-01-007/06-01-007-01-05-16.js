function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 0v30H0V15h13V0h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 17h11v11H2V17z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 4v2a3 3 0 000 6v2h1V4h-1zm0 3v4a2 2 0 110-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 7a2 2 0 000 4V7z",
  fill: "#fff"
}));

export default SvgComponent;