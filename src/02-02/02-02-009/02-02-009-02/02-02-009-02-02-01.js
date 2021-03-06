function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 42
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 34v8h2v-6h6v-2H8zM7.071 1.016V0H0v7.071h1.016V1.016h6.055zM12.728 22.627l5.657 5.657 1.414-1.414-4.243-4.243 4.243-4.242-1.414-1.414-5.657 5.656zM8 11V3h2v6h6v2H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.063 3l-.75.75C4.572 4.435 5.796 5.239 7 6.125v-1.25C6.041 4.198 5.058 3.552 4.062 3zm8.875 9c1.316 1.943 2.202 4.077 2.718 6.281l.844-.812c-.51-1.9-1.36-3.755-2.438-5.469h-1.124zm2.718 14.969A18.895 18.895 0 0113.062 33h1.188a20.219 20.219 0 002.219-5.219l-.813-.812zM7 38.875a18.773 18.773 0 01-5.344 2.188l.25.937c1.758-.427 3.486-1.06 5.094-1.969v-1.156z"
}));

export default SvgComponent;