function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 32
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 16h-2l-3.5-3.5L7 16H5l5.5-5.5L16 16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 0c2.402 0 4.425 4.079 4.906 9.5H9.625C9.128 5.058 8.15 2 7 2 5.343 2 4 8.268 4 16s1.343 14 3 14c1.106 0 2.05-2.833 2.563-7h1.343c-.385 5.118-2.2 9-4.406 9h-2C1.462 32 0 26.18 0 19v-7C0 5.373 2.134 0 6 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 22h-2l-3.5-3.5L7 22H5l5.5-5.5L16 22z"
}));

export default SvgComponent;