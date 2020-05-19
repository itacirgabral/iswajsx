function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 58,
  height: 58
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M39.656 34H28.344l23.281 23.281 5.656-5.656L39.656 34z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M28.656 23H17.344l11 11h11.312l-11-11z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.375.719L.719 6.375 17.344 23h11.312L6.375.719zM26.5 26C23 26 23 30 23 30h2s0-2 1.5-2 1.5 2 4 2c3.5 0 3.5-4 3.5-4h-2s0 2-1.5 2-1.5-2-4-2z"
}));

export default SvgComponent;