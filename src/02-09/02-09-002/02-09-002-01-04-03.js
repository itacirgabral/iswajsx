function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 0a6 6 0 00-6 6 7.977 7.977 0 003.438 6.563A5.999 5.999 0 000 18a7 7 0 007 7h6v-4H5a3 3 0 01-3-3 4 4 0 014-4h7v-4H6a4 4 0 110-8h8V0H6z"
}));

export default SvgComponent;