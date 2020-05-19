function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 8h25V6H7v2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 2a6 6 0 000 12h3v-3h-3c-2.761 0-5-1.343-5-3a5 5 0 015-5h3V2h-3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 8l4.5 4.5L21 17V8zm1 2.406v4.188l2.094-2.094L22 10.406zM7 14L0 7l7-7v14zm-1-2.438V2.438L1.437 7 6 11.563z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 11.563L1.437 7 6 2.437v9.126zM22 10.406l2.094 2.094L22 14.594v-4.188z",
  fill: "#fff"
}));

export default SvgComponent;