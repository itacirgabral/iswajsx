function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 34,
  height: 34
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 24.431L2.564 34l9.569-2.564L0 24.431zm1.589 2.066l7.93 4.604-6.248 1.674-1.682-6.278zM27 0c-4.948 0-9 2-9 7 0 3 2 3 2 6s-2 6-5 6h-1c-7 0-9 4-9.219 8.188l1.782 1.03C7 22 10 21 14 21h1c3 0 7-3 7-8 0-3-3-4-3-6 0 0-1-5 8-5h7V0h-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.589 26.497l1.682 6.278 6.248-1.674-7.93-4.604z",
  fill: "#fff"
}));

export default SvgComponent;