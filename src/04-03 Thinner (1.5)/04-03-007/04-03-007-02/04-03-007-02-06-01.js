function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 6,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 10a3 3 0 003-3c0-2.67-.97-5.104-2.563-7L2 .844a9.395 9.395 0 011.906 3.312A2.916 2.916 0 003 4a3 3 0 100 6z"
}));

export default SvgComponent;