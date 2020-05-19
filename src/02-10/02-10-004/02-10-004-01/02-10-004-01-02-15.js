function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 9l6 6V3L6 9zm1.406 0L11 5.437v7.125L7.406 9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 4.5C0 2.015 3.806 0 8.5 0h8C21.194 0 25 2.015 25 4.5v2c0 2.022-2.532 3.714-6 4.281V6.844c2.9-.346 5-1.259 5-2.344C24 3.12 20.642 2 16.5 2h-8C4.358 2 1 3.12 1 4.5c0 .957 1.624 1.77 4 2.188v3.906C2.06 9.888 0 8.32 0 6.5v-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.406 9L11 12.563V5.436L7.406 9z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 9l6 6V3l-6 6zm1.406 0L17 5.437v7.125L13.406 9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.406 9L17 12.563V5.436L13.406 9z",
  fill: "#fff"
}));

export default SvgComponent;