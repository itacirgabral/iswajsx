function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 40
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 0L0 7l7 7V0zM6 2.438v9.124L1.406 7 6 2.437z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 6v2h3.5a3.5 3.5 0 110 7H8a7 7 0 000 14h2.5a3.5 3.5 0 110 7H3v4h5.5a7.5 7.5 0 100-15H6a3 3 0 010-6h3.5a6.5 6.5 0 006.5-6.5V11c0-2.761-2.462-5-5.5-5H7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 2.438L1.406 7 6 11.563V2.437z",
  fill: "#fff"
}));

export default SvgComponent;