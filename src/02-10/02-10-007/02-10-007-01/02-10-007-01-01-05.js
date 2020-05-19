function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8.719 0l2.5 2.5-2.5 2.5L8 4.281 9.781 2.5 8 .719 8.719 0zM6 2v2H4V2h2zm9 2v2h-2V4h2zM3 4v2H1V4h2zm13 4v2h-2V8h2zM2 8v2H0V8h2zm13 4v2h-2v-2h2zM3 12v2H1v-2h2zm9 2v2h-2v-2h2zm-6 0v2H4v-2h2zm3 1v2H7v-2h2z"
}));

export default SvgComponent;