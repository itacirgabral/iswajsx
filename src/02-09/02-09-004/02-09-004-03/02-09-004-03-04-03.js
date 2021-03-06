function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 45
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7.5 0a7.5 7.5 0 100 15H12a6 6 0 010 12H9a9 9 0 100 18h5v-4H7a5 5 0 110-10h3c5.523 0 10-4.477 10-10s-4.477-10-10-10H6.5a4.5 4.5 0 010-9H18V0H7.5z"
}));

export default SvgComponent;