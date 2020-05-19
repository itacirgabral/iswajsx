function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 37
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 0h1v37h-1V0zM14 6L19.5.5 25 6H14z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 0h3v37h-3V0z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 0h1v37H9V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 6v5a3 3 0 01-3 3H4v3h11a5 5 0 005-5V6h-1zM6 35L.5 29.5 6 24v11zM15 19v1a3 3 0 013 3v2a3 3 0 01-3 3H6v3h9a5 5 0 005-5v-2a5 5 0 00-5-5z"
}));

export default SvgComponent;