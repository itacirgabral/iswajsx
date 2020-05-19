function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 58,
  height: 58
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18.344 34h11.312L6.375 57.281.719 51.625 18.344 34z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M29.344 23h11.312l-11 11H18.344l11-11z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M51.625.719l5.656 5.656L40.656 23H29.344L51.625.719zM25.594 24L35 29.438V31H23v-2h7.313L23 24.781V24h2.594z"
}));

export default SvgComponent;