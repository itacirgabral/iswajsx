function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 46,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 3v12h12L0 3zm1 2.438L9.563 14H1V5.437z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24.5 0A26.434 26.434 0 005.75 7.75l-.5.5 1.438 1.438.5-.5C11.62 4.753 17.735 2 24.5 2c6.765 0 12.879 2.754 17.313 7.188L44.593 12 46 10.594 43.25 7.75A26.434 26.434 0 0024.5 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1 5.438V14h8.563L1 5.437z",
  fill: "#fff"
}));

export default SvgComponent;