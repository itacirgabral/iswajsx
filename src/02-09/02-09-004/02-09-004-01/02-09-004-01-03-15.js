function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 13,
  height: 49
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6.5.5L0 7h2l4.5-4.5L11 7h2L6.5.5zM7 7v5c0 .568.244 1.073.625 1.438l1.156.78A10.97 10.97 0 0112 22a10.97 10.97 0 01-3.219 7.781l-1.156.844C5.996 32.254 6 34.515 6 37s.715 4.028 2.344 5.656l4.219 4.219L10.437 49 6.22 44.781A10.97 10.97 0 013 37a10.97 10.97 0 013.219-7.781l1.156-.844A8.988 8.988 0 0010 22a8.988 8.988 0 00-2.625-6.375l-.656-.781C6.266 14.12 6 13.104 6 12V7h1z"
}));

export default SvgComponent;