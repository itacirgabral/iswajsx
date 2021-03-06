function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M26 0a6 6 0 016 6 8 8 0 01-8 8h-3v4a7 7 0 01-7 7H7v-4h9a3 3 0 003-3v-4a5 5 0 01-5-5 3 3 0 013-3 4 4 0 014 4v.563L26 10c1.874-.208 4-1.79 4-4 0-2.761-1.79-5-4-5V0zm-9 7a2 2 0 000 4l2-.219V9a2 2 0 00-2-2zM7 30l-7-7 7-7v14z"
}));

export default SvgComponent;