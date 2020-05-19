function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 0L0 7l7 7V0zM6 2.438v9.124L1.406 7 6 2.437z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 6v2h3a4 4 0 110 8H4v4h7a3 3 0 010 6H3v4h6a7 7 0 007-7 5.994 5.994 0 00-3.594-5.5A5.994 5.994 0 0016 12a6 6 0 00-6-6H7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 2.438L1.406 7 6 11.563V2.437z",
  fill: "#fff"
}));

export default SvgComponent;