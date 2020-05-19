function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8.719 10l2.5-2.5-2.5-2.5L8 5.719 9.781 7.5 8 9.281l.719.719zM0 2h2V0H0v2zm1 4h2V4H1v2zm12 0h2V4h-2v2zm1-4h2V0h-2v2zM4.719 10l2.5-2.5-2.5-2.5L4 5.719 5.781 7.5 4 9.281l.719.719z"
}));

export default SvgComponent;