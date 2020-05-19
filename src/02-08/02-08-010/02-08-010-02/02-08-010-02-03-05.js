function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 38
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 21l-8 8h2l6-6 6 6h2l-8-8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 0v12.75a4.443 4.443 0 00-2.5-.75 4.5 4.5 0 000 9c.928 0 1.788-.27 2.5-.75V32a4 4 0 01-4 4c-2.761 0-5-3.134-5-7H4a9 9 0 009 9h4a6 6 0 006-6V0h-2zm-2.5 14a2.5 2.5 0 110 5 2.5 2.5 0 010-5z"
}));

export default SvgComponent;