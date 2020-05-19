function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 6,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2.413.945l-1.932.518 3.106 11.591 1.932-.518L2.413.946z"
}));

export default SvgComponent;