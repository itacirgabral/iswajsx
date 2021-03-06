function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 42
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 0v5c0 .568.244 1.073.625 1.438l1.156.78A10.97 10.97 0 019 15a10.97 10.97 0 01-3.219 7.781l-1.156.844C2.996 25.254 3 27.515 3 30s.715 4.028 2.344 5.656l4.218 4.219L7.438 42l-4.22-4.219A10.97 10.97 0 010 30a10.97 10.97 0 013.219-7.781l1.156-.844A8.988 8.988 0 007 15a8.988 8.988 0 00-2.625-6.375l-.656-.781C3.266 7.12 3 6.104 3 5V0h1z"
}));

export default SvgComponent;