function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 36,
  height: 39
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M36 11l-8 8-8-8h16zm-2.438 1H22.438L28 17.594 33.563 12z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23 0a6 6 0 016 6v5h-2V6a4 4 0 10-8 0v28a5 5 0 01-5 5h-2C5.373 39 0 33.627 0 27h12c0 4.97.895 9 2 9 1.657 0 3-.895 3-2V6a6 6 0 016-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M33.563 12L28 17.594 22.437 12h11.125z",
  fill: "#fff"
}));

export default SvgComponent;