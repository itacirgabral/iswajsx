function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 40
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 20l-5.5 5.5L4 20h11zm-2.438 1H6.439L9.5 24.063 12.563 21z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.5 40C2.015 40 0 36.194 0 31.5v-23C0 3.806 2.015 0 4.5 0h2C8.985 0 12 3.806 12 8.5V13H7V8.5C7 4.358 5.88 2 4.5 2S2 4.358 2 8.5v23C2 35.642 3.12 38 4.5 38S7 35.642 7 31.5v-5h5v5c0 4.694-3.015 8.5-5.5 8.5h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.563 21L9.5 24.063 6.437 21h6.125z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 14l-5.5 5.5L4 14h11zm-2.438 1H6.439L9.5 18.063 12.563 15z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.563 15L9.5 18.063 6.437 15h6.125z",
  fill: "#fff"
}));

export default SvgComponent;