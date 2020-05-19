function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 39
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 0a6 6 0 00-6 6v5h2V6a4 4 0 118 0v28a5 5 0 005 5c5.523 0 10-5.373 10-12h-2c0 5.523-3.582 10-8 10a3 3 0 01-3-3V6a6 6 0 00-6-6z"
}));

export default SvgComponent;