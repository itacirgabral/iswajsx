function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 22a8 8 0 11-16 0 8 8 0 1116 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 28a6 6 0 110-12",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 0h2v14h-2zM4.688 4.688L3.28 6.093 11.187 14H14L4.687 4.687zM22.063 15.094L17 20.188V23l6.5-6.5-1.438-1.406z"
}));

export default SvgComponent;