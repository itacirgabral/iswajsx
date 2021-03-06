function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.625 0A15.917 15.917 0 012.5 7.5 15.9 15.9 0 011.125 14H3A7 7 0 003 0H.625zm2.25 1.5H3A5.5 5.5 0 018.5 7a5.508 5.508 0 01-5.219 5.5c.47-1.58.719-3.267.719-5 0-2.118-.426-4.126-1.125-6z"
}));

export default SvgComponent;