function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 18a8 8 0 11-16 0 8 8 0 1116 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 0v13c.005.005.026-.005.031 0H14V0h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.594 6.406l-6.657 6.657c.233.232.459.487.657.75.207.274.397.54.562.843L21 7.812l-1.406-1.406z"
}));

export default SvgComponent;