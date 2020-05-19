function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 42,
  height: 41
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 0L.5 8.5 9 17V0zM8 2.438v12.124L1.906 8.5 8 2.437zM9 7v3h10.5a4.5 4.5 0 010 9 8.5 8.5 0 000 17H25c1.38 0 2.492-.731 3.531-1.469 1.54-1.093 2.24-3.128 3.782-4.218C33.25 29.648 34.257 29 35.5 29a4.5 4.5 0 014.5 4.5V41h2v-7.5a6.5 6.5 0 00-6.5-6.5c-1.795 0-3.417.73-4.594 1.906 0 0-2.973 3.094-4.906 3.094h-8.5a4.5 4.5 0 010-9h.5a8 8 0 100-16H9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 2.438L1.906 8.5 8 14.563V2.437z",
  fill: "#fff"
}));

export default SvgComponent;