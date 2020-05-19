function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 45,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14 7l7 7-7 7v-2l5-5-5-5V7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 0a8 8 0 000 16h6v-4H8c-3.314 0-6-1.79-6-4a6 6 0 016-6h29a6 6 0 016 6c0 2.21-2.686 4-6 4h-7v4h7a8 8 0 100-16H8z"
}));

export default SvgComponent;