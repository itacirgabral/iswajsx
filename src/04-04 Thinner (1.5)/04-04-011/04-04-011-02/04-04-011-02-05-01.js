function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 8,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 8V7c1.38 0 2.5-1.343 2.5-3S5.38 1 4 1V0a4 4 0 110 8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 8V7c1.38 0 2.5-1.343 2.5-3S1.38 1 0 1V0a4 4 0 110 8z"
}));

export default SvgComponent;