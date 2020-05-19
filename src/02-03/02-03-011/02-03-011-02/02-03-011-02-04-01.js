function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 31
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v31l12-11.688V31h2V14.5l-12 12V0H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 0v16.813l12-12V31h2V0L8 12V0H6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 0v26.5l12-12V31h4V4.812l-12 12V0H2z",
  fill: "#fff"
}));

export default SvgComponent;