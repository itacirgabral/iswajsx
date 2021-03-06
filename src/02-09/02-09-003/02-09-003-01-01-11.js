function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 30V16l-7 7 7 7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 0a6 6 0 016 6c0 1.27-.488 2.707-1.344 3.688l-2.125 2.28 2.032 2.157A6.017 6.017 0 0120 18a7 7 0 01-7 7H7v-4h8a3 3 0 003-3c0-.926-.315-1.79-.844-2.469l-1.875-2.25-1.437 1.563A4.01 4.01 0 0111 16a4 4 0 110-8 4.01 4.01 0 012.844 1.156l1.469 1.531 1.718-2.062A3.97 3.97 0 0018 6a4 4 0 00-4-4H6V0h8zm-3 9.5a2.5 2.5 0 100 5c.69 0 1.3-.297 1.75-.75L14.219 12l-1.469-1.75A2.462 2.462 0 0011 9.5z"
}));

export default SvgComponent;