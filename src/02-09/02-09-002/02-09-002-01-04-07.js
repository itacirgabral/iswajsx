function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 13,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 0v2h3a4 4 0 110 8H1v4h7a3 3 0 010 6H0v4h6a7 7 0 007-7 5.994 5.994 0 00-3.594-5.5A5.994 5.994 0 0013 6a6 6 0 00-6-6H4z"
}));

export default SvgComponent;