function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 9,
  height: 9
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2.813 0l-.688.688 6.188 6.187L9 6.156 2.812 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.125.688L.687 2.125l6.188 6.156 1.438-1.406L2.125.687z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M.688 2.125L0 2.813 6.188 9l.687-.719L.687 2.125z"
}));

export default SvgComponent;