function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 40
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M27 0l-8 8h2.719l5.218-5.25L32.188 8H35l-8-8zM26 8v20.188L14 16.155v19.032L1.406 22.593 0 24l16 16V21l12 12V8h-2z"
}));

export default SvgComponent;