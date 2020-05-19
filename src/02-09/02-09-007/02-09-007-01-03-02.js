function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 20a5 5 0 00-5 5v2a5 5 0 005 5v-3a3 3 0 01-3-3v-2a3 3 0 013-3h9v-1h-9zM19 15l5.5 5.5L19 26v-2l3.5-3.5L19 17v-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 0h-1v35h1V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23 5v1H10a3 3 0 00-3 3v5H4v-4a5 5 0 015-5h14z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 0h-3v35h3V0z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 14l-5.5 5.5L0 14h2l3.5 3.5L9 14h2zM16 0h-1v35h1V0z"
}));

export default SvgComponent;