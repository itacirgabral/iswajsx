function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.395.999L.877 2.93l7.728 2.071.518-1.932L1.395 1z"
}));

export default SvgComponent;