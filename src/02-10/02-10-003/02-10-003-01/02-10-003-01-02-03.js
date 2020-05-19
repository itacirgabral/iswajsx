function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 9l6 6V3L7 9zm1.406 0L12 5.437v7.125L8.406 9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 4.5C0 2.015 3.806 0 8.5 0h8C21.194 0 25 2.015 25 4.5v2c0 2.485-3.806 4.5-8.5 4.5H14V7h2.5C20.642 7 24 5.88 24 4.5S20.642 2 16.5 2h-8C4.358 2 1 3.12 1 4.5c0 1.085 2.1 1.998 5 2.344v3.937C2.532 10.214 0 8.522 0 6.5v-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.406 9L12 12.563V5.436L8.406 9z",
  fill: "#fff"
}));

export default SvgComponent;