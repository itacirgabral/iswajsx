function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 29
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v2h7c9 0 8 5 8 5 0 2-3 3-3 6 0 5 4 8 7 8h1c4 0 7 1 7.438 7.219l1.78-1.032C29 23 27 19 20 19h-1c-3 0-5-3-5-6s2-3 2-6c0-5-4.052-7-9-7H0z"
}));

export default SvgComponent;