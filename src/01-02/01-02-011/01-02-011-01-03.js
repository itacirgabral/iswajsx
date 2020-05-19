function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 12h15v15H8zM8 12h2V7s0 3 0 0-3-3-3-3H0v2h7S6 6 7 6s1 1 1 1v5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 12h2V4s0 4 0 0-4-4-4-4H2v2h8s-2 0 0 0 2 2 2 2v8z",
  fillRule: "evenodd"
}));

export default SvgComponent;