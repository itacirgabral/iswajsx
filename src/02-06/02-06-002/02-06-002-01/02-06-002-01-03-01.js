function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 0L.5 6.5 7 13v-2.813L3.312 6.5 7 2.812V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 3v1.5h1.5c6.075 0 11 4.925 11 11s-4.925 11-11 11H4V28h4.5C15.404 28 21 22.404 21 15.5S15.404 3 8.5 3H7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 4.5v4h1.5a7 7 0 010 14H4v4h4.5c6.075 0 11-4.925 11-11s-4.925-11-11-11H7z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 8.5V10h1.5a5.5 5.5 0 010 11H4v1.5h4.5a7 7 0 000-14H7z"
}));

export default SvgComponent;