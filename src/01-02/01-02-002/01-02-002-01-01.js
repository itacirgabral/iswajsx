function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 22a8 8 0 11-16 0 8 8 0 1116 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 22a6 6 0 11-12 0 6 6 0 1112 0z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 0h2v22h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.688 4.688L3.28 6.093 14.187 17 16 16 4.687 4.687z"
}));

export default SvgComponent;