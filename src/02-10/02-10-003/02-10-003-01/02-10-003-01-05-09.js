function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10.5 8.5L16 14H5l5.5-5.5zm0 1.438L7.437 13h6.125L10.5 9.937z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.5 0c2.304 0 4.173 3.281 4.438 7.5h-1.97C8.804 3.839 7.767 1 6.5 1 5.12 1 4 4.358 4 8.5v8C4 20.642 5.12 24 6.5 24S9 20.642 9 16.5V15h2v1.5c0 4.694-2.015 8.5-4.5 8.5h-2C2.015 25 0 21.194 0 16.5v-8C0 3.806 2.015 0 4.5 0h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.5 9.938L13.563 13H7.436L10.5 9.937z",
  fill: "#fff"
}));

export default SvgComponent;