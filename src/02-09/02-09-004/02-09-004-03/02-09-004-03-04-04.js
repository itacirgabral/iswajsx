function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 33,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0a8 8 0 100 16h11a1 1 0 011 1c0 .828-.332 1.582-.875 2.125l-3.938 3.063A7.49 7.49 0 0013 27.5a7.5 7.5 0 007.5 7.5H33v-4H20.5c-3.038 0-5.5-1.567-5.5-3.5 0-1.519.63-2.88 1.625-3.875l3.906-3.094A4.978 4.978 0 0022 17a5 5 0 00-5-5H7a5 5 0 01-5-5 6 6 0 016-6h7V0H8z"
}));

export default SvgComponent;