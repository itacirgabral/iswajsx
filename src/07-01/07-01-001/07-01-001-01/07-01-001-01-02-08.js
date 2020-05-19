function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 58,
  height: 58
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M26.344 32h2.843L53.75 56.563 52.344 58l-26-26z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.25 1.438L22.813 20h2.843l11 11h-2.843l22.75 22.75-2.813 2.813L29.187 32h-2.843l-9-9h2.843L1.438 4.25 4.25 1.437z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.438 4.25L20.188 23h-2.844L0 5.656 1.438 4.25zM33.813 31h2.843L58 52.344l-1.438 1.406L33.813 31zM5.656 0l20 20h-2.843L4.25 1.437 5.656 0zM25.594 22L35 27.438V29H23v-2h7.313L23 22.781V22h2.594z"
}));

export default SvgComponent;