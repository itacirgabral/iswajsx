function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 36,
  height: 9
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0c0 4.97 4.253 9 9.5 9 3.737 0 6.949-2.059 8.5-5.031C19.551 6.94 22.763 9 26.5 9c2.664 0 5.056-1.046 6.781-2.719L36 4l-1.781-1.781L31.25 4.25c-1.291.556-2.954.75-4.75.75C22.358 5 19 3.866 19 0h-2c0 3.866-3.358 5-7.5 5C5.358 5 2 3.866 2 0H0z"
}));

export default SvgComponent;