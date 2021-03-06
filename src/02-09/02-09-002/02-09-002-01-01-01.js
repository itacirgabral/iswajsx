function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 40,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 1l10 10H0V1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.5 0c-2.664 0-5.056 1.046-6.781 2.719L4.25 5.25l1.406 1.406 2.469-2.531C9.487 2.822 11.395 2 13.5 2 17.642 2 21 5.134 21 9h2c0-3.866 3.358-7 7.5-7C34.642 2 38 5.134 38 9h2c0-4.97-4.253-9-9.5-9-3.737 0-6.949 2.059-8.5 5.031C20.449 2.06 17.237 0 13.5 0z"
}));

export default SvgComponent;