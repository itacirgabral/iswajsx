function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 16l7 7-7 7v-2l5-5-5-5v-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 0a6 6 0 00-6 6c0 1.27.488 2.707 1.344 3.688l2.125 2.28-2.031 2.157A6.017 6.017 0 000 18a7 7 0 007 7h6v-4H5a3 3 0 01-3-3c0-.926.315-1.79.844-2.469l1.875-2.25 1.437 1.563A4.01 4.01 0 009 16a4 4 0 100-8 4.01 4.01 0 00-2.844 1.156l-1.468 1.531-1.72-2.062A3.97 3.97 0 012 6a4 4 0 014-4h8V0H6zm3 9.5a2.5 2.5 0 110 5c-.69 0-1.3-.297-1.75-.75L5.781 12l1.469-1.75C7.7 9.797 8.31 9.5 9 9.5z"
}));

export default SvgComponent;