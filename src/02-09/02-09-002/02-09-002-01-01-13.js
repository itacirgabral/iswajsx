function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 40,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 10L10 0H0v10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M40 2c0 4.97-4.253 9-9.5 9-3.737 0-6.949-2.059-8.5-5.031C20.449 8.94 17.237 11 13.5 11c-2.664 0-5.056-1.046-6.781-2.719L4 6l1.781-1.781L8.75 6.25c1.291.556 2.954.75 4.75.75C17.642 7 21 5.866 21 2h2c0 3.866 3.358 5 7.5 5C34.642 7 38 5.866 38 2h2z"
}));

export default SvgComponent;