function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 13,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6.5 0C2.91 0 0 1.343 0 3s2.91 3 6.5 3S13 4.657 13 3s-2.91-3-6.5-3zm0 1.5c2.761 0 5 .672 5 1.5s-2.239 1.5-5 1.5-5-.672-5-1.5 2.239-1.5 5-1.5z"
}));

export default SvgComponent;