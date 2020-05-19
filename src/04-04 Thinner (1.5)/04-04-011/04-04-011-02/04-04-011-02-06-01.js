function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 8,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 8V7C2.62 7 1.5 5.657 1.5 4S2.62 1 4 1V0a4 4 0 100 8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 8V7C6.62 7 5.5 5.657 5.5 4S6.62 1 8 1V0a4 4 0 100 8z"
}));

export default SvgComponent;