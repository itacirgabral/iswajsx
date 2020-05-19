function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 34,
  height: 34
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M24.431 34L34 31.436l-2.564-9.569L24.431 34zm2.066-1.589l4.604-7.93 1.674 6.248-6.278 1.682zM0 7c0 4.948 2 9 7 9 3 0 3-2 6-2s6 2 6 5v1c0 7 4 9 8.188 9.219l1.03-1.782C22 27 21 24 21 20v-1c0-3-3-7-8-7-3 0-4 3-6 3 0 0-5 1-5-8V0H0v7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M26.497 32.411l6.278-1.682-1.674-6.248-4.604 7.93z",
  fill: "#fff"
}));

export default SvgComponent;