function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8.719 10l2.5-2.5-2.5-2.5L8 5.719 9.781 7.5 8 9.281l.719.719zM6 8V6H4v2h2zm9-2V4h-2v2h2zM3 6V4H1v2h2zm13-4V0h-2v2h2zM2 2V0H0v2h2z"
}));

export default SvgComponent;