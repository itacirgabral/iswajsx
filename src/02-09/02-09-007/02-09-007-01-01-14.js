function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 37
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 0h-1v37h1V0zM11 6L5.5.5 0 6h11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 0h-3v37h3V0z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 0h-1v37h1V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 6v5a3 3 0 003 3h12v3H10a5 5 0 01-5-5V6h1zM19 35l5.5-5.5L19 24v11zM10 19v1a3 3 0 00-3 3v2a3 3 0 003 3h9v3h-9a5 5 0 01-5-5v-2a5 5 0 015-5z"
}));

export default SvgComponent;