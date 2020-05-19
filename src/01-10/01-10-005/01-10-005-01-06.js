function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 0h15v15H9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 4v3h15V4H9z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.469 1.563l1.406 1.406L3.344 6.5 9 12.188V15L.5 6.5l4.969-4.938z"
}));

export default SvgComponent;