function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 13,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 0v2h3a4 4 0 014 4 4.01 4.01 0 01-1.156 2.844l-1.656 1.844-1.063-.813A2.996 2.996 0 005 9a3 3 0 000 6c.828 0 1.582-.332 2.125-.875l1.125-1.063 1.875 1.813c.543.543.875 1.297.875 2.125a3 3 0 01-3 3H0v4h6a7 7 0 007-7c0-1.403-.451-2.475-1.313-3.281L9.626 11.78l1.625-1.531A5.985 5.985 0 0013 6a6 6 0 00-6-6H4zm1 10.5c.414 0 .791.166 1.063.438l1.03 1-1.03 1.124A1.498 1.498 0 015 13.5a1.5 1.5 0 010-3z"
}));

export default SvgComponent;