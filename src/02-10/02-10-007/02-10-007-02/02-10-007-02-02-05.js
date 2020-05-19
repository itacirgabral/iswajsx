function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8.719 0l2.5 2.5-2.5 2.5L8 4.281 9.781 2.5 8 .719 8.719 0zM0 8h2v2H0V8zm1-4h2v2H1V4zm12 0h2v2h-2V4zm1 4h2v2h-2V8zM4.719 0l2.5 2.5-2.5 2.5L4 4.281 5.781 2.5 4 .719 4.719 0z"
}));

export default SvgComponent;