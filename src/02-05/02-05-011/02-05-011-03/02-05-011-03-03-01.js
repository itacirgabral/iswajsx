function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 40
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 0L5 8h2.719l5.218-5.25L18.188 8H21l-8-8zM12 8v20.188l-12-12V40h2V21l12 12V8h-2z"
}));

export default SvgComponent;