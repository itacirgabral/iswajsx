function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 0a6 6 0 016 6 5.992 5.992 0 01-1.75 4.25l-5.094 4.906A4.01 4.01 0 004 18v1a3 3 0 003 3c3.866 0 7-2.239 7-5h2c0 3.866-4.03 7-9 7a5 5 0 01-5-5v-1c0-1.657.664-3.164 1.75-4.25l5.094-4.906A4.01 4.01 0 0010 6a4 4 0 10-8 0v3H0V6a6 6 0 016-6z"
}));

export default SvgComponent;