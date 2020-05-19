function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 40,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M40 10L30 0h10v10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 2c0 4.97 4.253 9 9.5 9 3.737 0 6.949-2.059 8.5-5.031C19.551 8.94 22.763 11 26.5 11c2.664 0 5.056-1.046 6.781-2.719L36 6l-1.781-1.781L31.25 6.25c-1.291.556-2.954.75-4.75.75C22.358 7 19 5.866 19 2h-2c0 3.866-3.358 5-7.5 5C5.358 7 2 5.866 2 2H0z"
}));

export default SvgComponent;