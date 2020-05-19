function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 51
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14 14V0l7 7-7 7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 6v2H6.5a4.5 4.5 0 000 9H10c5.523 0 10 4.477 10 10s-4.477 10-10 10H7a5 5 0 100 10h11v4H9a9 9 0 110-18h3a6 6 0 000-12H7.5a7.5 7.5 0 110-15H14z"
}));

export default SvgComponent;