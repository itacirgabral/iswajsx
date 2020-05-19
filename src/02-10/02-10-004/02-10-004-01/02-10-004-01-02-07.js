function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M19 9l-6 6V3l6 6zm-1.406 0L14 5.437v7.125L17.594 9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M25 4.5C25 2.015 21.194 0 16.5 0h-8C3.806 0 0 2.015 0 4.5v2c0 2.022 2.532 3.714 6 4.281V6.844C3.1 6.498 1 5.585 1 4.5 1 3.12 4.358 2 8.5 2h8C20.642 2 24 3.12 24 4.5c0 .957-1.624 1.77-4 2.188v3.906c2.94-.706 5-2.273 5-4.094v-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.594 9L14 12.563V5.436L17.594 9z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 9l-6 6V3l6 6zm-1.406 0L8 5.437v7.125L11.594 9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.594 9L8 12.563V5.436L11.594 9z",
  fill: "#fff"
}));

export default SvgComponent;