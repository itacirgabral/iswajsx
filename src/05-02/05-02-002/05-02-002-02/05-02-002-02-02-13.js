function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 31,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M30.607 5.165l-2.5-4.33-27.713 16 2.5 4.33 27.713-16z"
}));

export default SvgComponent;