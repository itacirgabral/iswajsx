function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 9,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 0v5.813L1.312 3.124l-.687.688L3.813 7 .624 10.188l.688.687L4 8.187V12h1V8.187l2.688 2.688.687-.688L5.187 7l3.188-3.188-.688-.687L5 5.813V0H4z"
}));

export default SvgComponent;