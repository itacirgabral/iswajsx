function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18 2V0H0v2h18zM19.188 6l1.406-1.406L18 2h-2.813l4 4z"
}));

export default SvgComponent;