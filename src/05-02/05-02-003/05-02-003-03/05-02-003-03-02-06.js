function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.654.033L.62 3.896l7.727 2.071 1.036-3.864L1.654.033z"
}));

export default SvgComponent;