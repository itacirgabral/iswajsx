function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M20 2v6h-6V7h5V2h1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 0a10.97 10.97 0 017.781 3.219l-.718.719a9.956 9.956 0 00-14.125 0L1 5.875l-.719-.688L2.22 3.22A10.97 10.97 0 0110 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 1a9.956 9.956 0 017.063 2.938l-1.407 1.406A7.974 7.974 0 0010 3c-2.21 0-4.209.896-5.656 2.344L2.375 7.312 1 5.875l1.938-1.938A9.956 9.956 0 0110 1z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 3c2.21 0 4.209.896 5.656 2.344l-.719.718A6.96 6.96 0 0010 4a6.96 6.96 0 00-4.938 2.063L3.095 8l-.719-.688 1.969-1.968A7.974 7.974 0 0110 3z"
}));

export default SvgComponent;