function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 13,
  height: 49
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 7H0L6.5.5 13 7zM6 7v5c0 .568-.244 1.073-.625 1.438l-1.156.78A10.97 10.97 0 001 22a10.97 10.97 0 003.219 7.781l1.156.844C7.004 32.254 7 34.515 7 37s-.715 4.028-2.344 5.656L.438 46.875 2.562 49l4.22-4.219A10.97 10.97 0 0010 37a10.97 10.97 0 00-3.219-7.781l-1.156-.844A8.988 8.988 0 013 22c0-2.485.996-4.746 2.625-6.375l.656-.781C6.734 14.12 7 13.104 7 12V7H6z"
}));

export default SvgComponent;