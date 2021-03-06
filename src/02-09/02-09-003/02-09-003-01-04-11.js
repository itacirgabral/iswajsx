function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0a6 6 0 016 6c0 1.27-.488 2.707-1.344 3.688l-2.125 2.28 2.031 2.157A6.017 6.017 0 0114 18a7 7 0 01-7 7H1v-4h8a3 3 0 003-3c0-.926-.315-1.79-.844-2.469l-1.875-2.25-1.437 1.563A4.01 4.01 0 015 16a4 4 0 110-8 4.01 4.01 0 012.844 1.156l1.468 1.531 1.72-2.062A3.97 3.97 0 0012 6a4 4 0 00-4-4H0V0h8zM5 9.5a2.5 2.5 0 100 5c.69 0 1.3-.297 1.75-.75L8.219 12 6.75 10.25A2.462 2.462 0 005 9.5z"
}));

export default SvgComponent;