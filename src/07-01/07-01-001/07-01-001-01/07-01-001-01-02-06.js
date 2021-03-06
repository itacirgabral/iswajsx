function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 58,
  height: 58
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M26 34.813v2.843L5.656 58 4.25 56.562 26 34.813z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M53.75 1.438l2.813 2.812L36.813 24h2.843L26 37.656v-2.843L4.25 56.563 1.437 53.75 22 33.187v-2.843L31.344 21h2.843L53.75 1.437z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M56.563 4.25L58 5.656 39.656 24h-2.843l19.75-19.75zM22 30.344v2.843L1.437 53.75 0 52.344l22-22zM52.344 0l1.406 1.438L34.187 21h-2.843l21-21zM25.594 22L35 27.438V29H23v-2h7.313L23 22.781V22h2.594z"
}));

export default SvgComponent;