function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0L0 8h16L8 0zM7 8v20h22v-2H9V8H7z"
}));

export default SvgComponent;