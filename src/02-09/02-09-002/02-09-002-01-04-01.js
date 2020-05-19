function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 36,
  height: 9
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.5 0C6.836 0 4.444 1.046 2.719 2.719L.25 5.25l1.406 1.406 2.469-2.531C5.487 2.822 7.395 2 9.5 2 13.642 2 17 5.134 17 9h2c0-3.866 3.358-7 7.5-7C30.642 2 34 5.134 34 9h2c0-4.97-4.253-9-9.5-9-3.737 0-6.949 2.059-8.5 5.031C16.449 2.06 13.237 0 9.5 0z"
}));

export default SvgComponent;