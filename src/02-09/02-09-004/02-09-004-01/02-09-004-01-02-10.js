function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 34,
  height: 34
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M34 24.431L31.436 34l-9.569-2.564L34 24.431zm-1.589 2.066l-7.93 4.604 6.248 1.674 1.682-6.278zM0 0v2h7c9 0 8 5 8 5 0 2-3 3-3 6 0 5 4 8 7 8h1c4 0 7 1 7.438 7.219l1.78-1.032C29 23 27 19 20 19h-1c-3 0-5-3-5-6s2-3 2-6c0-5-4.052-7-9-7H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M32.411 26.497l-1.682 6.278-6.248-1.674 7.93-4.604z",
  fill: "#fff"
}));

export default SvgComponent;