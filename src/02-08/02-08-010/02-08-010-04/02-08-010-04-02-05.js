function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 49
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 32l-8 8h16l-8-8zm0 1.406L13.563 39H2.437L8 33.406z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 0v11.75a4.443 4.443 0 00-2.5-.75 4.5 4.5 0 000 9c.928 0 1.788-.27 2.5-.75v4.5a4.443 4.443 0 00-2.5-.75 4.5 4.5 0 000 9c.928 0 1.788-.27 2.5-.75V43a4 4 0 01-4 4c-2.761 0-5-3.134-5-7H4a9 9 0 009 9h4a6 6 0 006-6V0h-2zm-2.5 13a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0 12a2.5 2.5 0 110 5 2.5 2.5 0 010-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 33.406L2.437 39h11.126L8 33.406z",
  fill: "#fff"
}));

export default SvgComponent;