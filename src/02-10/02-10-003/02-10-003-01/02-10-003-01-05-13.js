function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10.5 16.5L16 11H5l5.5 5.5zm0-1.438L7.437 12h6.125L10.5 15.063z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.5 25c2.304 0 4.173-3.281 4.438-7.5h-1.97C8.804 21.161 7.767 24 6.5 24 5.12 24 4 20.642 4 16.5v-8C4 4.358 5.12 1 6.5 1S9 4.358 9 8.5V10h2V8.5C11 3.806 8.985 0 6.5 0h-2C2.015 0 0 3.806 0 8.5v8C0 21.194 2.015 25 4.5 25h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.5 15.063L13.563 12H7.436l3.063 3.063z",
  fill: "#fff"
}));

export default SvgComponent;