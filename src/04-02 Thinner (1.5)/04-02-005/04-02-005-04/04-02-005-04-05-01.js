function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 9,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 6H8c0 1.38-1.567 2.5-3.5 2.5S1 7.38 1 6H0c0 2.21 2.015 4 4.5 4S9 8.21 9 6zM4.5 0C2.015 0 0 1.79 0 4h1c0-1.38 1.567-2.5 3.5-2.5S8 2.62 8 4h1c0-2.21-2.015-4-4.5-4z"
}));

export default SvgComponent;