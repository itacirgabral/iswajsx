function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 9,
  height: 9
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 0H1.929v1.016h6.055v6.055H9V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.879 3.536L2.636 7.778l.707.707 4.243-4.242-.707-.707zM4.757 1.414L.515 5.657l.707.707 4.242-4.243-.707-.707z"
}));

export default SvgComponent;