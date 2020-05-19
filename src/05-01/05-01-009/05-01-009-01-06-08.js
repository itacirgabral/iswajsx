function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.622.878a3 3 0 11-4.243 4.243A3 3 0 019.622.878z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.616 4.944l-1.06-1.06-4.95 4.95 1.06 1.06 4.95-4.95z"
}));

export default SvgComponent;