function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 41,
  height: 41
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 25v16l-8-8 8-8zm-1 2.438L1.406 33 7 38.563V27.437zM33 0a8 8 0 110 16H22a1 1 0 00-1 1c0 .828.332 1.582.875 2.125l3.938 3.063A7.49 7.49 0 0128 27.5a7.5 7.5 0 01-7.5 7.5H8v-4h12.5c3.038 0 5.5-1.567 5.5-3.5 0-1.519-.63-2.88-1.625-3.875l-3.906-3.094A4.978 4.978 0 0119 17a5 5 0 015-5h10a5 5 0 005-5 6 6 0 00-6-6h-7V0h7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 27.438v11.125L1.406 33 7 27.437z",
  fill: "#fff"
}));

export default SvgComponent;