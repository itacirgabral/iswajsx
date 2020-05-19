function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 11c-4.416 0-8 3.584-8 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 13c-3.312 0-6 2.688-6 6s2.688 6 6 6V13z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.406.125L0 1.563 11.438 13h2.812L1.406.125z"
}));

export default SvgComponent;