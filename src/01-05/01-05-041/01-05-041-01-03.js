function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 0a5 5 0 000 10V8h2v6c-5.392 0-9.871-3.88-10.813-9H.158C1.116 11.233 6.498 16 13 16a8 8 0 100-16h-2z"
}));

export default SvgComponent;