function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 15l5.5 5.5L11 15H0zM9 6a5 5 0 00-5 5v4h3v-5a3 3 0 013-3h11V6H9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 0h1v24h-1V0zM15 0h1v24h-1V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 0h3v24h-3V0z",
  fill: "#fff"
}));

export default SvgComponent;